// import React from "react";
import { CardContent, Typography, Box } from "@mui/joy";
import { recipe } from "../interfaces";
import RecipeTags from "./RecipeTags";

export default function RecipeCard(props: { recipe: recipe }) {
  const { recipe } = props;

  return (
    <CardContent>
      <Typography level="body-xs">Category: {recipe.strCategory}</Typography>
      <Typography
        level="h2"
        sx={{
          mt: 1,
          fontWeight: "xl",
        }}
        endDecorator={
          recipe.strTags ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                mt: 1,
              }}
            >
              {recipe.strTags && <RecipeTags recipe={recipe} />}
            </Box>
          ) : null
        }
      >
        {recipe.strMeal}
      </Typography>
      <Typography level="body-md">{recipe.strArea}</Typography>
    </CardContent>
  );
}
