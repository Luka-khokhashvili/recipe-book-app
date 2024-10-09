// import React from "react";
import { CardContent, Typography, Box } from "@mui/joy";
import { recipe } from "../../interfaces/interfaces";
import RecipeTags from "../components/sharedComponents/RecipeTags";

/**
 * @function RecipeCard
 * @description A reusable component for displaying a single recipe on the main page
 * @param {object} props The props object
 * @param {recipe} props.recipe The recipe object to display
 * @returns {JSX.Element} The rendered component
 * @example
 * <RecipeCard recipe={recipe} />
 */
export default function RecipeCard({ recipe }: { recipe: recipe | null }) {
  // If the recipe is null, return null
  if (!recipe) return null;

  return (
    <CardContent>
      {/* Display the category of the recipe */}
      <Typography level="body-xs">Category: {recipe.strCategory}</Typography>

      {/* Display the title of the recipe with a larger font size */}
      <Typography
        level="h2"
        sx={{
          mt: 1,
          fontWeight: "xl",
        }}
        endDecorator={
          // If the recipe has tags, display them
          recipe.strTags ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                mt: 1,
              }}
            >
              {/* Call the RecipeTags component to display the tags */}
              <RecipeTags recipe={recipe} />
            </Box>
          ) : null
        }
      >
        {recipe.strMeal}
      </Typography>

      {/* Display the area of the recipe */}
      <Typography level="body-md">{recipe.strArea}</Typography>
    </CardContent>
  );
}
