import { Link, Stack } from "@mui/joy";
import SearchBar from "./SearchBar";
import { recipe } from "../../../interfaces/interfaces";

/**
 * A reusable component for the navigation bar's stack.
 * This component renders a SearchBar and a Link to the recipes section.
 * @param {object} props The props object
 * @param {recipe[]} props.recipes The list of recipes to search through
 * @param {string | null} props.selectedRecipe The currently selected recipe
 * @param {React.Dispatch<React.SetStateAction<string | null>>} props.setSelectedRecipe
 * @param {() => void} props.handleRecipeSelection
 * @returns {JSX.Element} The rendered component
 * @example
 * <NavStack recipes={recipes} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} handleRecipeSelection={handleRecipeSelection} />
 */
export default function NavStack({
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
  return (
    <Stack direction="row" spacing={2}>
      {/* SearchBar component for searching through the list of recipes */}
      <SearchBar
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
        handleRecipeSelection={handleRecipeSelection}
      />

      {/* Link to the recipes section */}
      <Link
        href="#recipesSection"
        color="warning"
        underline="hover"
        sx={{
          fontSize: "1.4rem",
          color: "#fff",
          textTransform: "uppercase",
          "&:hover": { color: "#A5A5A5" },
          "@media screen and (min-width: 1024px)": {
            ":hover": { color: "#fff" },
          },
        }}
      >
        Recipes
      </Link>
    </Stack>
  );
}
