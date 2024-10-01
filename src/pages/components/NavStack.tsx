import { useState } from "react";
import { Link, Stack } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { recipe } from "../../interfaces/interfaces";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function NavStack(props: { recipes: recipe[] | null }) {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const handleRecipeSelection = () => {
    if (selectedRecipe) {
      navigate(`/recipe/${selectedRecipe}`); // Navigate to the recipe page
    }
  };

  const { recipes } = props;

  return (
    <Stack direction="row" spacing={1} sx={{ height: "min-content" }}>
      <FormControl
        id="search-bar"
        sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
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
      <Link
        href="#recipesSection" // Assuming this doesn't navigate, remove if not needed
        color="warning"
        underline="hover"
        sx={{
          fontSize: "1.4rem",
          color: "rgb(255, 255, 255)",
          textTransform: "uppercase",
          "&:hover": { color: "rgb(165 165 165)" },
          "@media screen and (min-width: 1024px)": {
            ":hover": { color: "rgb(255, 255, 255)" },
          },
        }}
        onClick={handleRecipeSelection} // Redirect on click as well (optional)
      >
        Recipes
      </Link>
    </Stack>
  );
}
