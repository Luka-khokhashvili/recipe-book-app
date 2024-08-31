import { useEffect, useState } from "react";
import "./App.css";
import { recipe } from "./interfaces";
import { getRecipes } from "./ApiCall";
import {
  Card,
  CardOverflow,
  CardContent,
  Typography,
  Stack,
  Link,
  AspectRatio,
  Button,
  Chip,
  Grid,
  Sheet,
  Box,
  CardActions,
} from "@mui/joy";
import { GradientBack } from "./GradientBack";

function App() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  useEffect(() => {
    getRecipes((setRecipe) => setRecipes(setRecipe));
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          pt: "1%",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          top: "0",
        }}
      >
        <img
          src="src/assets/recipeBook.png"
          loading="lazy"
          alt="Recipe book icon"
          style={{ width: "120px", aspectRatio: "1" }}
        />
        <Stack direction="row" spacing={1}>
          <Link
            underline="hover"
            sx={{
              fontSize: "1.4rem",
              color: "rgb(255, 255, 255)",
              textTransform: "uppercase",
            }}
          >
            Recipes
          </Link>
        </Stack>
      </Box>
      <Sheet
        sx={{
          position: "relative",
          height: "90vh",
          zIndex: "-999",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GradientBack />
        <div className="custom-shape-divider-bottom-1725112114">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>

        <Typography
          level="h1"
          sx={{
            fontSize: "8rem",
            color: "rgba(225, 225, 225, 0.5)",
            zIndex: "1",
            textTransform: "uppercase",
            fontWeight: "900",
          }}
        >
          Recipe
        </Typography>
        <Typography
          level="h2"
          sx={{
            fontSize: "3.6rem",
            color: "rgb(255, 255, 255)",
            textTransform: "uppercase",
            fontWeight: "800",
            transform: "translate(-50%, -105%)",
          }}
        >
          Book
        </Typography>
        <Typography
          level="title-lg"
          sx={{
            color: "rgba(225, 225, 225, 0.5)",
          }}
        >
          Recipes from all over the world
        </Typography>
      </Sheet>

      <Box
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
                <CardContent>
                  <Typography level="body-xs">{recipe.strCategory}</Typography>

                  <Typography
                    level="h2"
                    sx={{ mt: 1, fontWeight: "xl" }}
                    endDecorator={
                      recipe.strTags ? (
                        <Chip
                          component="span"
                          size="sm"
                          variant="soft"
                          color="success"
                        >
                          {recipe.strTags}
                        </Chip>
                      ) : null
                    }
                  >
                    {recipe.strMeal}
                  </Typography>
                  <Typography level="body-md">{recipe.strArea}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="solid" color="primary" size="lg">
                    View recipe
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
