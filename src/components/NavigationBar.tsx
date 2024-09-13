import React, { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 436);

  useEffect(() => {
    // Function to handle screen width change
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 436);
    };

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isMobile ? <MobileNavBar /> : <NavStack />}
    </Box>
  );
}

export default NavigationBar;
