import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

export default function RecipeInstructions(props: { recipe: recipe | null }) {
  const { recipe } = props;

  return (
    <Box
      sx={{
        gridColumn: "span 8",
        p: "1rem",
        "@media screen and (max-width: 436px)": {
          gridColumn: "span 1",
          order: 5,
        },
        "@media screen and (max-width: 768px)": {
          gridColumn: "span 2",
          order: 5,
        },
      }}
    >
      <Typography level="h3">Instructions</Typography>
      <Box sx={{ p: "2rem" }}>
        {recipe && recipe && (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              margin: 0,
              fontFamily: "inter",
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "text.secondary",
              padding: "0.5rem",
            }}
          >
            {recipe.strInstructions}
          </pre>
        )}
      </Box>
    </Box>
  );
}
