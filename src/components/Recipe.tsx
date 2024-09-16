import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, CircularProgress, Chip } from "@mui/joy";
import { recipe } from "../interfaces";
import { findRecipe } from "../ApiCall";
import RecipeTags from "./RecipeTags";

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

  switch (true) {
    case loading:
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

    case !!error:
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

    case !recipe:
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
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
    >
      <Box
        sx={{
          gridColumn: "span 8",
          display: "flex",
          justifyContent: "center",
          p: "4rem",
          position: "relative",
        }}
      >
        {recipe.strMealThumb && (
          <>
            <div className="recipe-background"></div>
            <img
              style={{
                width: "45%",
                aspectRatio: "1/1",
                // transform: "rotate(-11deg)",
                borderRadius: "30%",
              }}
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </>
        )}
      </Box>
      <Box
        sx={{
          gridColumn: "span 4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          p: "1rem",
          bgcolor: "#0A2343",
        }}
      >
        <Typography level="h1" sx={{ fontSize: "6rem", color: "#FFF" }}>
          {recipe.strMeal}
        </Typography>
        <Typography level="h1" sx={{ color: "#636B74" }}>
          {recipe.strCategory}
        </Typography>
        <Typography level="body-lg" sx={{ color: "#D0D4D7" }}>
          {recipe.strArea}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            margin: "2rem 0 0 1.5rem",
          }}
        >
          {recipe.strTags && (
            <>
              <Typography level="body-sm" sx={{ color: "#FFF" }}>
                Tags:{" "}
              </Typography>
              <RecipeTags recipe={recipe} />
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ gridColumn: "span 12", p: "1rem" }}>
        <Typography level="h3">Instructions</Typography>
        <Box sx={{ p: "2rem" }}>
          {recipe.strInstructions && (
            <pre
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                margin: 0,
                fontFamily: "inter",
                fontSize: "1rem",
                lineHeight: 1.5,
                color: "text.secondary",
                padding: "0.5rem",
              }}
            >
              {recipe.strInstructions}
            </pre>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeDetail;
