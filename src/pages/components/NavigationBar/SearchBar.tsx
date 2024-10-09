import { recipe } from "../../../interfaces/interfaces";
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { FormControl } from "@mui/joy";

/**
 * A reusable component for searching through a list of recipes
 * @param {object} props The props object
 * @param {recipe[]} props.recipes The list of recipes to search through
 * @param {string | null} props.selectedRecipe The currently selected recipe
 * @param {React.Dispatch<React.SetStateAction<string | null>>} props.setSelectedRecipe
 * @param {() => void} props.handleRecipeSelection
 * @returns {JSX.Element} The rendered component
 * @example
 * <SearchBar recipes={recipes} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} handleRecipeSelection={handleRecipeSelection} />
 */
export default function SearchBar({
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
    <FormControl
      id="search-bar"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {recipes && (
        <Autocomplete
          freeSolo
          placeholder="Search for a recipe"
          options={recipes.map(({ strMeal }) => strMeal)}
          filterOptions={createFilterOptions({
            matchFrom: "any",
            stringify: (option) => option,
          })}
          value={selectedRecipe}
          onChange={(_, value) => setSelectedRecipe(value)}
          endDecorator={
            <SearchRoundedIcon
              onClick={handleRecipeSelection}
              sx={{ order: 3, cursor: "pointer" }}
            />
          }
          sx={{
            width: "15rem",
          }}
        />
      )}
    </FormControl>
  );
}
