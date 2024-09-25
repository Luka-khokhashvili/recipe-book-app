import { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

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
        bgcolor: "#0D6EFD",
        width: "100%",
        p: "1% 0",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        top: "0",
        zIndex: "100",
        "@media screen and (max-width: 436px)": { pt: "10%" },
      }}
    >
      <MenuBookRoundedIcon sx={{ color: "#FFF", fontSize: "3rem" }} />
      {isMobile ? <MobileNavBar /> : <NavStack />}
    </Box>
  );
}

export default NavigationBar;
