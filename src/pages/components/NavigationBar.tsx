import { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 436);
  const [glassmorph, setGlassmorph] = useState(false);

  useEffect(() => {
    // Function to handle screen width change
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 436);
    };

    // Function to handle scroll and change navbar position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setGlassmorph(true);
      } else {
        setGlassmorph(false);
      }
    };

    // Add event listeners for resize and scroll
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
        transition: "all 0.3s ease",
        "@media screen and (max-width: 436px)": { pt: "10%" },
        ...(glassmorph && {
          background: "rgba(13,110,253,0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }),
      }}
    >
      <MenuBookRoundedIcon sx={{ color: "#FFF", fontSize: "3rem" }} />
      {isMobile ? <MobileNavBar /> : <NavStack />}
    </Box>
  );
}

export default NavigationBar;
