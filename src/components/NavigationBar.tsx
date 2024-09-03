// import React from "react";
import { Box, Stack, Link } from "@mui/joy";

function NavigationBar() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: "1%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        top: "0",
      }}
    >
      <img
        src="src/assets/recipeBook.png"
        loading="lazy"
        alt="Recipe book icon"
        style={{ width: "120px", aspectRatio: "1" }}
      />
      <Stack direction="row" spacing={1} sx={{ height: "min-content" }}>
        <Link
          href="#recipesSection"
          color="warning"
          underline="hover"
          sx={{
            fontSize: "1.4rem",
            color: "rgb(255, 255, 255)",
            textTransform: "uppercase",
            "&:hover": { color: "rgb(165 165 165)" },
          }}
        >
          Recipes
        </Link>
      </Stack>
    </Box>
  );
}

export default NavigationBar;
