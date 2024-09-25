import { useEffect } from "react";
import {
  Box,
  // Typography,
  Grid,
  CardOverflow,
  CardActions,
  AspectRatio,
  Card,
  Button,
} from "@mui/joy";
import { recipe } from "../../interfaces/interfaces";
import { getRecipes } from "../../ApiCall";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

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
      {/* <Typography sx={{ fontSize: "3rem", textAlign: "center" }}>
        Recipes
      </Typography> */}
      <Grid
        container
        spacing={3}
        sx={{
          gap: "2%",
          margin: "1%",
          "@media screen and (max-width: 436px)": {
            justifyContent: "center",
          },
        }}
      >
        {recipes &&
          recipes.map((recipe) => (
            <Card
              key={recipe.idMeal}
              sx={{
                width: 366,
                maxWidth: "100%",
                boxShadow: "lg",
                m: "1%",
                "@media screen and (max-width: 768px) and (min-width: 436px)": {
                  maxWidth: "42%",
                },
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
                <Button
                  component={Link}
                  to={`/recipe/${recipe.strMeal}`}
                  variant="solid"
                  color="primary"
                  size="lg"
                >
                  View recipe
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </Box>
  );
}
