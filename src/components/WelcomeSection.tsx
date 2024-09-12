// import React from 'react'
import { Sheet, Typography } from "@mui/joy";
import { GradientBack } from "../GradientBack";

export default function WelcomeSection() {
  return (
    <Sheet
      sx={{
        position: "relative",
        height: "90vh",
        zIndex: "-999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GradientBack />
      <div className="custom-shape-divider-bottom-1725112114">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <Typography
        level="h1"
        sx={{
          fontSize: "8rem",
          color: "rgba(225, 225, 225, 0.5)",
          zIndex: "1",
          textTransform: "uppercase",
          fontWeight: "900",
          "@media screen and (max-width: 436px)": { fontSize: "6rem" },
        }}
      >
        Recipe
      </Typography>
      <Typography
        level="h2"
        sx={{
          fontSize: "3.6rem",
          color: "rgb(255, 255, 255)",
          textTransform: "uppercase",
          fontWeight: "800",
          transform: "translate(-50%, -105%)",
          "@media screen and (max-width: 436px)": { fontSize: "3rem" },
        }}
      >
        Book
      </Typography>
      <Typography
        level="title-lg"
        sx={{
          color: "rgba(225, 225, 225, 0.5)",
        }}
      >
        Recipes from all over the world
      </Typography>
    </Sheet>
  );
}
