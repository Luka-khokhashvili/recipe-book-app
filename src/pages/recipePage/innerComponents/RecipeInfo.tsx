import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";
import RecipeTags from "../../components/sharedComponents/RecipeTags";

export default function RecipeInfo({ recipe }: { recipe: recipe | null }) {
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
      <Typography level="h1" sx={{ fontSize: "1.5rem", color: "#636B74" }}>
        ID: {recipe?.idMeal}
      </Typography>
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
        {recipe?.strMeal}
      </Typography>
      <Typography level="h1" sx={{ color: "#636B74" }}>
        {recipe?.strCategory}
      </Typography>
      <Typography level="body-lg" sx={{ color: "#D0D4D7" }}>
        {recipe?.strArea}
      </Typography>
      {recipe && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            margin: "2rem 0 0 1.5rem",
          }}
        >
          <Typography level="body-sm" sx={{ color: "#FFF" }}>
            Tags:{" "}
          </Typography>
          <RecipeTags recipe={recipe} />
        </Box>
      )}
    </Box>
  );
}
