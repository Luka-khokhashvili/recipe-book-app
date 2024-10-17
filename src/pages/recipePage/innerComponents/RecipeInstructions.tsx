import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

/**
 * @function RecipeInstructions
 * @description This component displays the instructions of the recipe on the
 *              recipe page.
 * @param {object} props The props object.
 * @param {recipe} props.recipe The recipe object.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipeInstructions({
  recipe,
}: {
  recipe: recipe | null;
}) {
  return (
    <Box
      sx={{
        gridColumn: "span 8",
        p: "1rem",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          order: 5,
        },
        "@media screen and (max-width: 768px) and (min-width: 437px)": {
          gridColumn: "span 2",
          order: 5,
        },
      }}
    >
      <Typography level="h3">Instructions</Typography>
      <Box
        sx={{
          p: "2rem",
          "@media screen and (max-width: 436px)": { p: "0" },
          "@media screen and (max-width: 768px) and (min-width: 437px)": {
            p: "0",
          },
        }}
      >
        {recipe && (
          <pre className="instructions-pre">{recipe.strInstructions}</pre>
        )}
      </Box>
    </Box>
  );
}
