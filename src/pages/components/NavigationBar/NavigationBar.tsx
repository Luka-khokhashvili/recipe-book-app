import { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { recipe } from "../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

function NavigationBar(props: { recipes: recipe[] | null }) {
  const navigate = useNavigate();
  const { recipes } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 436);
  const [glassmorph, setGlassmorph] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const handleRecipeSelection = () => {
    if (selectedRecipe) {
      navigate(`/recipe/${selectedRecipe}`); // Navigate to the recipe page
    }
  };

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
        "@media screen and (max-width: 436px)": { p: "2vh 0 1vh 0" },
        ...(glassmorph && {
          background: "rgba(13,110,253,0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }),
      }}
    >
      <MenuBookRoundedIcon sx={{ color: "#FFF", fontSize: "3rem" }} />
      {isMobile ? (
        <MobileNavBar
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          handleRecipeSelection={handleRecipeSelection}
        />
      ) : (
        <NavStack
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          handleRecipeSelection={handleRecipeSelection}
        />
      )}
    </Box>
  );
}

export default NavigationBar;
