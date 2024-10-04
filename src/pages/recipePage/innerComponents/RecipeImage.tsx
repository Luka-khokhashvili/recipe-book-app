import { Box } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

export default function RecipeImage(props: { recipe: recipe | null }) {
  const { recipe } = props;
  return (
    <Box
      sx={{
        gridColumn: "span 4",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          order: 1,
        },

        "@media screen and (max-width: 768px)": {
          gridColumn: "span 1",
          order: 2,
        },
      }}
    >
      {recipe && (
        <img
          style={{
            width: "100%",
            aspectRatio: "1/1",
          }}
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      )}
    </Box>
  );
}
