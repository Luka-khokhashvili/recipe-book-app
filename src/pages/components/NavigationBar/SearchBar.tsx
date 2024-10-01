import { recipe } from "../../../interfaces/interfaces";
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { FormControl } from "@mui/joy";

export default function SearchBar(props: {
  recipes: recipe[] | null;
  selectedRecipe: string | null;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<string | null>>;
  handleRecipeSelection: () => void;
}) {
  const { recipes, selectedRecipe, handleRecipeSelection, setSelectedRecipe } =
    props;

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
          options={recipes.map((recipe) => recipe.strMeal)}
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
