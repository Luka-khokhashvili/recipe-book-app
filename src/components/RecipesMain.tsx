import { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  CardOverflow,
  CardActions,
  AspectRatio,
  Card,
  Button,
} from "@mui/joy";
import { recipe } from "../interfaces";
import { getRecipes } from "../ApiCall";
import RecipeCard from "./RecipeCard";

export default function RecipesMain(props: {
  recipes: recipe[] | null;
  setRecipes: (recipes: recipe[]) => void;
}) {
  const { recipes, setRecipes } = props;

  useEffect(() => {
    getRecipes((setRecipe) => setRecipes(setRecipe));
  }, [setRecipes]);

  return (
    <Box
      id="recipesSection"
      sx={{
        flexGrow: 1,
        pt: "1rem",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "3rem", textAlign: "center" }}>
        Recipes
      </Typography>
      <Grid container spacing={3} sx={{ gap: "2%", margin: "1%" }}>
        {recipes &&
          recipes.map((recipe) => (
            <Card
              sx={{
                width: 366,
                maxWidth: "100%",
                boxShadow: "lg",
                m: "1%",
              }}
            >
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src={recipe.strMealThumb}
                    loading="lazy"
                    alt="meal thumbnail"
                  />
                </AspectRatio>
              </CardOverflow>
              <RecipeCard recipe={recipe} />
              <CardActions>
                <Button variant="solid" color="primary" size="lg">
                  View recipe
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </Box>
  );
}
