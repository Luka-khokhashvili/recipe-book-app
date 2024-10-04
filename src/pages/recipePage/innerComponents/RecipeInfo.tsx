import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";
import RecipeTags from "../../components/sharedComponents/RecipeTags";

/**
 * @function RecipeInfo
 * @description This component displays the information of the recipe on the
 *              left side of the recipe page.
 * @param {object} props The props object.
 * @param {recipe} props.recipe The recipe object.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipeInfo(props: { recipe: recipe | null }) {
  const { recipe } = props;
  return (
    <Box
      sx={{
        gridColumn: "span 4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        p: "1rem",
        bgcolor: "#0A2343",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          order: 2,
        },
        "@media screen and (max-width: 768px)": {
          gridColumn: "span 1",
          order: 1,
        },
      }}
    >
      {/* ID of the recipe */}
      <Typography level="h1" sx={{ fontSize: "1.5rem", color: "#636B74" }}>
        ID: {recipe && recipe.idMeal}
      </Typography>
      {/* Name of the recipe */}
      <Typography
        level="h1"
        sx={{
          fontSize: "6rem",
          color: "#FFF",
          "@media screen and (max-width: 1024px)": {
            fontSize: "5rem",
          },
        }}
      >
        {recipe && recipe.strMeal}
      </Typography>
      {/* Category of the recipe */}
      <Typography level="h1" sx={{ color: "#636B74" }}>
        {recipe && recipe.strCategory}
      </Typography>
      {/* Area of the recipe */}
      <Typography level="body-lg" sx={{ color: "#D0D4D7" }}>
        {recipe && recipe.strArea}
      </Typography>
      {/* Tags */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          margin: "2rem 0 0 1.5rem",
        }}
      >
        {recipe && (
          <>
            {/* Tags label */}
            <Typography level="body-sm" sx={{ color: "#FFF" }}>
              Tags:{" "}
            </Typography>
            {/* Tags */}
            <RecipeTags recipe={recipe} />
          </>
        )}
      </Box>
    </Box>
  );
}
