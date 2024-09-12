// import React from "react";
import {
  Box,
  // Stack,
  // Link
} from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";

function NavigationBar() {
  return (
    <Box
      className="navigationBar"
      sx={{
        width: "100%",
        pt: "1%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        top: "0",
        "@media screen and (max-width: 436px)": { pt: "10%" },
      }}
    >
      <img
        className="recipeBookIcon"
        src="src/assets/recipeBook.png"
        loading="lazy"
        alt="Recipe book icon"
      />
      {window.innerWidth > 436 ? <NavStack /> : <MobileNavBar />}
    </Box>
  );
}

export default NavigationBar;
