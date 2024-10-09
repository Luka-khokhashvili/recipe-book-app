import { Box, Grid } from "@mui/joy";
import { recipe } from "../../interfaces/interfaces";
import FloatingCard from "./FloatingCard";

/**
 * @function RecipesMain
 * @description The main component for the recipe section on the main page.
 * @param {object} props The props object.
 * @param {recipe[]} props.recipes The list of recipes to display.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipesMain({
  recipes,
}: {
  recipes: recipe[] | null;
}): JSX.Element {
  return (
    <Box
      id="recipesSection"
      sx={{
        // Flexbox properties
        flexGrow: 1,
        pt: "1rem",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          // Grid properties
          gap: { xs: "2%", md: "4.48%" },
          margin: "1%",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Map over the list of recipes and render a FloatingCard component for each one */}
        {recipes?.map((recipe) => (
          <FloatingCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </Grid>
    </Box>
  );
}
