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
  Box,
  CardActions,
} from "@mui/joy";

function App() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  useEffect(() => {
    getRecipes((setRecipe) => setRecipes(setRecipe));
  }, []);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} sx={{ gap: "2%", margin: "1%" }}>
          {recipes &&
            recipes.map((recipe) => (
              <Card
                sx={{
                  width: 320,
                  maxWidth: "100%",
                  boxShadow: "lg",
                  margin: "1%",
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
                    level="title-lg"
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
                  <Typography level="body-sm">{recipe.strArea}</Typography>
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
