import { Box } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

/**
 * @function RecipeImage
 * @description This component displays the image of the recipe on the left side of the recipe page.
 * @param {object} props The props object.
 * @param {recipe} props.recipe The recipe object.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipeImage({
  recipe,
}: {
  recipe: recipe | null;
}): JSX.Element {
  return (
    <Box
      // Make the box take up 4 grid columns
      sx={{
        gridColumn: "span 4",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          order: 1,
        },
        "@media screen and (max-width: 768px) and (min-width: 437px)": {
          gridColumn: "span 1",
          order: 2,
        },
      }}
    >
      {recipe && (
        // If the recipe object exists, render the image
        <img
          style={{
            width: "100%",
            aspectRatio: "1/1",
          }}
          // Set the image's source to the recipe's thumbnail
          src={recipe.strMealThumb}
          // Set the image's alt text to the recipe's name
          alt={recipe.strMeal}
        />
      )}
    </Box>
  );
}
