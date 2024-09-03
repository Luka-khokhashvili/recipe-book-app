// import React from "react";
import { CardContent, Typography, Chip } from "@mui/joy";
import { recipe } from "../interfaces";

export default function RecipeCard(props: { recipe: recipe }) {
  const { recipe } = props;

  return (
    <CardContent>
      <Typography level="body-xs">Category: {recipe.strCategory}</Typography>

      <Typography
        level="h2"
        sx={{ mt: 1, fontWeight: "xl" }}
        endDecorator={
          recipe.strTags
            ? recipe.strTags.split(",").map((tag: string, index: number) => (
                <Chip
                  key={index}
                  component="span"
                  size="sm"
                  variant="soft"
                  color="success"
                  sx={{ margin: "2px" }}
                >
                  {tag.trim()}
                </Chip>
              ))
            : null
        }
      >
        {recipe.strMeal}
      </Typography>
      <Typography level="body-md">{recipe.strArea}</Typography>
    </CardContent>
  );
}
