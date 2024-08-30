import { useEffect, useState } from "react";
import "./App.css";
import { recipe } from "./interfaces";
import { getRecipes } from "./ApiCall";
import {
  Card,
  CardOverflow,
  CardContent,
  Typography,
  // Link,
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
        <Typography
          level="h1"
          sx={{
            fontSize: "5rem",
            color: "rgba(225, 225, 225, 0.5)",
            zIndex: "1",
            textTransform: "uppercase",
            weight: "900",
          }}
        >
          Recipe Book
        </Typography>
        <Typography level="title-lg" sx={{ color: "rgba(225, 225, 225, 0.5)" }}>
          Recipes from all over the world
        </Typography>
      </Sheet>

      <Box
        sx={{
          flexGrow: 1,
          pt: "1rem",
          borderTop: "5px solid grey",
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
