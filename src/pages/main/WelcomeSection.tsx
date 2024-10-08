// import React from 'react'
import { Sheet, Typography } from "@mui/joy";
// import { GradientBack } from "../components/GradientBack";

export default function WelcomeSection() {
  return (
    <Sheet
      sx={{
        position: "relative",
        height: "max-content",
        p: "1rem",
        pt: "86px",
        zIndex: "-999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 36, 90, 1)",
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontSize: "8rem",
          color: "rgba(225, 225, 225, 0.5)",
          zIndex: "1",
          textTransform: "uppercase",
          fontWeight: "900",
          "@media screen and (max-width: 436px)": { fontSize: "24vw" },
        }}
      >
        Recipe
      </Typography>
      <Typography
        level="h2"
        sx={{
          fontSize: "3.4rem",
          color: "rgb(255, 255, 255)",
          textTransform: "uppercase",
          fontWeight: "800",
          transform: "translate(-50%, -105%)",
          "@media screen and (max-width: 436px)": { fontSize: "11vw" },
        }}
      >
        Haven
      </Typography>
      <Typography
        level="title-lg"
        sx={{
          color: "rgba(225, 225, 225, 0.5)",
          "@media screen and (max-width: 436px)": { fontSize: "5vw" },
        }}
      >
        Recipes from all over the world
      </Typography>
    </Sheet>
  );
}
