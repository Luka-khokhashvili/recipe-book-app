import { Link, Stack } from "@mui/joy";
import SearchBar from "./SearchBar";
import { recipe } from "../../../interfaces/interfaces";

export default function NavStack(props: {
  recipes: recipe[] | null;
  selectedRecipe: string | null;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<string | null>>;
  handleRecipeSelection: () => void;
}) {
  const { recipes, selectedRecipe, setSelectedRecipe, handleRecipeSelection } =
    props;

  return (
    <Stack direction="row" spacing={5} sx={{ height: "min-content" }}>
      <SearchBar
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
        handleRecipeSelection={handleRecipeSelection}
      />
      <Link
        href="#recipesSection"
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
      >
        Recipes
      </Link>
    </Stack>
  );
}
