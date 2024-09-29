import { useEffect } from "react";
import { Box, Grid } from "@mui/joy";
import { recipe } from "../../interfaces/interfaces";
import { getRecipes } from "../../ApiCall";
import FloatingCard from "./FloatingCard";

export default function RecipesMain(props: {
  recipes: recipe[] | null;
  setRecipes: (recipes: recipe[]) => void;
}) {
  const { recipes, setRecipes } = props;

  useEffect(() => {
    getRecipes((setRecipe) => setRecipes(setRecipe));
  }, [setRecipes]);

  return (
    <Box
      id="recipesSection"
      sx={{
        flexGrow: 1,
        pt: "1rem",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          gap: "2%",
          margin: "1%",
          "@media screen and (max-width: 436px)": {
            justifyContent: "center",
          },
          "@media screen and (max-width: 1440px) and (min-width: 1025px)": {
            gap: "4.48%",
          },
        }}
      >
        {recipes &&
          recipes.map((recipe) => (
            <FloatingCard key={recipe.idMeal} recipe={recipe} />
          ))}
      </Grid>
    </Box>
  );
}
