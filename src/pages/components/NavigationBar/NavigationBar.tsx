import { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import NavStack from "./NavStack";
import MobileNavBar from "./MobileNavBar";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { recipe } from "../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

/**
 * @function NavigationBar
 * @description The navigation bar component, which renders the title and either
 * the mobile navigation bar or the desktop navigation bar depending on the
 * screen size.
 * @param {object} props The props object.
 * @param {recipe[]} props.recipes The list of recipes to display in the navigation
 * bar.
 * @returns {JSX.Element} The rendered component.
 */
function NavigationBar({ recipes }: { recipes: recipe[] | null }) {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 436);
  const [isGlassmorph, setIsGlassmorph] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  /**
   * Handles the selection of a recipe by navigating to the recipe page.
   */
  const handleRecipeSelection = () => {
    if (selectedRecipe) {
      navigate(`/recipe/${selectedRecipe}`); // Navigate to the recipe page
    }
  };

  useEffect(() => {
    /**
     * Handles the resizing of the window by updating the isMobileView state.
     */
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 436);
    };

    /**
     * Handles the scrolling of the window by updating the isGlassmorph state.
     */
    const handleScroll = () => {
      setIsGlassmorph(window.scrollY > 100);
    };

    // Add event listeners to the window
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listeners when the component is unmounted
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
        ...(isGlassmorph && {
          background: "rgba(13,110,253,0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }),
      }}
    >
      <MenuBookRoundedIcon sx={{ color: "#FFF", fontSize: "3rem" }} />
      {/* Render either the mobile navigation bar or the desktop navigation bar
       * depending on the screen size
       */}
      {isMobileView ? (
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
