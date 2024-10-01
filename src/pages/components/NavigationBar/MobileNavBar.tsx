import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/joy";
import SearchBar from "./SearchBar";
import { recipe } from "../../../interfaces/interfaces";

export default function MobileNavBar(props: {
  recipes: recipe[] | null;
  selectedRecipe: string | null;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<string | null>>;
  handleRecipeSelection: () => void;
}) {
  const { recipes, selectedRecipe, handleRecipeSelection, setSelectedRecipe } =
    props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton variant="soft" color="primary" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
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
        <SearchBar
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          handleRecipeSelection={handleRecipeSelection}
        />
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
            <MuiLink href="#recipesSection" onClick={() => setOpen(false)}>
              Recipes
            </MuiLink>
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
