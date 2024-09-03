import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/joy";
import { recipe } from "../interfaces";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<recipe | null>(null);

  useEffect(() => {
    // Fetch recipe data based on the `id` from the URL
    fetch(`https://api.example.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography level="h2">{recipe.strMeal}</Typography>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <Typography level="body-sm">{recipe.strInstructions}</Typography>
      {/* Add more details as needed */}
    </Box>
  );
};

export default RecipeDetail;
