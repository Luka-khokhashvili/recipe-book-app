import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

/**
 * @function RecipeIngredients
 * @description This component displays the list of ingredients of the recipe
 *              on the recipe page.
 * @param {object} props The props object.
 * @param {recipe} props.recipe The recipe object.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipeIngredients({
  recipe,
}: {
  recipe: recipe | null;
}) {
  /**
   * Get the list of keys of the ingredients from the recipe object
   * by filtering the keys that start with "strIngredient"
   */
  const ingredientKeys = Object.keys(recipe ?? {}).filter((key) =>
    key.startsWith("strIngredient")
  );

  return (
    <Box
      sx={{
        /**
         * Grid settings for the component. The component should take up
         * 4 columns on large screens and 1 column on small screens.
         * The component should be in the second row on large screens and
         * in the first row on small screens.
         */
        gridColumn: "span 4",
        gridRow: "span 2",
        p: "1rem",
        color: "#D0D4D7",
        bgcolor: "#0A2343",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          gridRow: "span 1",
          order: 4,
        },
        "@media screen and (max-width: 768px)": {
          gridColumn: "span 2",
          gridRow: "span 1",
          order: 5,
        },
      }}
    >
      <Typography level="h2" sx={{ color: "#FFF" }}>
        Ingredients
      </Typography>
      <Box sx={{ p: "2rem" }}>
        <ul>
          {ingredientKeys.map((ingredientKey, index) => {
            /**
             * Get the ingredient and its measure from the recipe object
             */
            const ingredient = recipe?.[ingredientKey as keyof recipe] ?? "";
            const measureKey = `strMeasure${ingredientKey.slice(13)}`;
            const measure =
              recipe?.[measureKey as keyof recipe] ?? "No measure";

            // If the ingredient is not empty, return the ingredient and its measure
            if (ingredient.trim() !== "") {
              return (
                <li key={index}>
                  {ingredient} -{" "}
                  {measure.trim() !== "" ? measure : "No measure"}
                </li>
              );
            }

            // If the ingredient is empty, return null
            return null;
          })}
        </ul>
      </Box>
    </Box>
  );
}
