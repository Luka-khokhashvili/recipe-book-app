import { Link, Stack } from "@mui/joy";
import React from "react";

export default function NavStack() {
  return (
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
          "@media screen and (max-width: 436px)": {
            ":hover": { color: "rgb(255, 255, 255)" },
          },
        }}
      >
        Recipes
      </Link>
    </Stack>
  );
}
