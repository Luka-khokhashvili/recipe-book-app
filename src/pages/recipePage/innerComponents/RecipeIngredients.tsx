import { Box, Typography } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

export default function RecipeIngredients(props: { recipe: recipe | null }) {
  const { recipe } = props;

  return (
    <Box
      sx={{
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
        <pre
          style={{
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            margin: 0,
            fontFamily: "inter",
            fontSize: "1.2rem",
            lineHeight: 1.5,
            color: "text.secondary",
            padding: "0.5rem",
          }}
        >
          <ul>
            {recipe &&
              Object.keys(recipe)
                // Filter to only get ingredient keys
                .filter((key) => key.startsWith("strIngredient"))
                .map((ingredientKey, index) => {
                  const ingredient = recipe[ingredientKey as keyof recipe];
                  const measureKey = `strMeasure${ingredientKey.slice(13)}`;
                  const measure = recipe[measureKey as keyof recipe];

                  if (ingredient && ingredient.trim() !== "") {
                    return (
                      <li key={index}>
                        {ingredient} -{" "}
                        {measure && measure.trim() !== ""
                          ? measure
                          : "No measure"}
                      </li>
                    );
                  }

                  return null;
                })}
          </ul>
        </pre>
      </Box>
    </Box>
  );
}
