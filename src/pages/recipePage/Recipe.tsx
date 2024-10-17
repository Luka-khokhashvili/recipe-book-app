import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, CircularProgress } from "@mui/joy";
import { recipe } from "../../interfaces/interfaces";
import { findRecipe } from "../../ApiCall";
import {
  RecipeInfo,
  RecipeImage,
  RecipeIngredients,
  RecipeVideoEmbed,
  RecipeInstructions,
} from "./RecipeModule";

const RecipeDetail: React.FC = () => {
  const { name: recipeName } = useParams<{ name: string }>();
  const [recipe, setRecipe] = useState<recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (recipeName) {
      setLoading(true);
      findRecipe(recipeName)
        .then((data) => {
          if (data === null) {
            setError("Recipe not found");
            setRecipe(null);
          } else {
            setRecipe(data);
            setError(null);
          }
        })
        .catch((e) => {
          setError(e.message);
          setRecipe(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [recipeName]);

  /* Render appropriate component based on loading state */
  // if data is loading
  if (loading) {
    return (
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size="lg" variant="plain" />
        Loading...
      </Typography>
    );
  }

  // if there is an error
  if (error) {
    return (
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Error: {error}
      </Typography>
    );
  }

  // if recipe is not found
  if (!recipe) {
    return (
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Recipe wasn't found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        "@media screen and (max-width: 436px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        "@media screen and (max-width: 768px) and (min-width: 437px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      }}
    >
      {/* Recipe info */}
      <RecipeInfo recipe={recipe} />

      {/* Recipe image */}
      <RecipeImage recipe={recipe} />

      {/* Recipe ingredients */}
      <RecipeIngredients recipe={recipe} />

      {/* Recipe instructions */}
      <RecipeInstructions recipe={recipe} />

      {/* Video Embed */}
      <Box
        sx={{
          gridColumn: "span 12",
          p: "1rem",
          bgcolor: "#0A2343",
          "@media screen and (max-width: 436px)": {
            gridColumn: "span 1",
            order: 3,
          },

          "@media screen and (max-width: 768px) and (min-width: 437px)": {
            gridColumn: "span 2",
            order: 3,
          },
        }}
      >
        <RecipeVideoEmbed strYoutube={recipe.strYoutube} />
      </Box>
    </Box>
  );
};
export default RecipeDetail;
