import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { Link } from "@mui/joy";
import SearchBar from "./SearchBar";
import { recipe } from "../../../interfaces/interfaces";

/**
 * The MobileNavBar component.
 *
 * This component renders a menu button for mobile viewports that opens a drawer containing a SearchBar and a link to the recipes section.
 * It takes four props: an array of recipes, the currently selected recipe, a function to set the selected recipe, and a function to handle when the user
 * selects a recipe.
 * The component uses the Drawer component from MUI to render the drawer and the SearchBar component from this library to render the search bar.
 * The component also uses the ModalClose component from MUI to render the close button for the drawer.
 *
 * @param {object} props The props object
 * @param {recipe[]} props.recipes The list of recipes
 * @param {string | null} props.selectedRecipe The currently selected recipe
 * @param {React.Dispatch<React.SetStateAction<string | null>>} props.setSelectedRecipe
 * @param {() => void} props.handleRecipeSelection
 * @returns {React.ReactElement} The rendered component
 */
export default function MobileNavBar({
  recipes,
  selectedRecipe,
  setSelectedRecipe,
  handleRecipeSelection,
}: {
  recipes: recipe[] | null;
  selectedRecipe: string | null;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<string | null>>;
  handleRecipeSelection: () => void;
}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="soft"
        color="primary"
        onClick={() => setDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: "100vw" }}
      >
        {/* Close button for the drawer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        {/* SearchBar component for searching through the list of recipes */}
        <SearchBar
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          handleRecipeSelection={handleRecipeSelection}
        />
        {/* Link to the recipes section */}
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton>
            <Link
              href="#recipesSection"
              onClick={() => setDrawerOpen(false)}
              underline="none"
              color="primary"
            >
              Recipes
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
