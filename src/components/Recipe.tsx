import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, CircularProgress } from "@mui/joy";
import { recipe } from "../interfaces";
import { findRecipe } from "../ApiCall";

const RecipeDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [recipe, setRecipe] = useState<recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (name) {
      setLoading(true);
      findRecipe(name)
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
  }, [name]);

  if (loading) {
    return (
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="lg" variant="plain" />
        Loading...
      </Typography>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!recipe) {
    return <Typography>Recipe wasn't found</Typography>;
  }

  return (
    <Box>
      <Typography level="h2">{recipe.strMeal}</Typography>
      {recipe.strMealThumb && (
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      )}
      {recipe.strInstructions && (
        <Typography level="body-sm">{recipe.strInstructions}</Typography>
      )}
      {/* Add more details as needed */}
    </Box>
  );
};

export default RecipeDetail;
