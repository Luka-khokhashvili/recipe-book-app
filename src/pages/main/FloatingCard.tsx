import { recipe } from "../../interfaces/interfaces";
import RecipeCard from "./RecipeCard";
import { Card, CardActions, CardOverflow, AspectRatio, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

/**
 * This component displays a single recipe on the main page.
 *
 * The component checks if the recipe is in view and updates the opacity
 * and transform properties accordingly. This creates a fade-in effect when
 * the user scrolls to the recipe.
 *
 * The component also renders a card with the recipe image, name and tags.
 *
 * @param {Recipe} recipeData The recipe object to display
 * @returns {JSX.Element} The rendered component
 */
const FloatingCard = ({ recipe }: { recipe: recipe }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      sx={{
        width: 366,
        maxWidth: "100%",
        boxShadow: "lg",
        margin: "1%",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        "@media screen and (max-width: 768px) and (min-width: 436px)": {
          maxWidth: "42%",
        },
        "@media screen and (max-width: 1024px) and (min-width: 769px)": {
          maxWidth: "26.61%",
        },
      }}
    >
      <CardOverflow>
        <AspectRatio
          sx={{
            minWidth: 200,
          }}
        >
          {/* Display the recipe image */}
          <img src={recipe.strMealThumb} loading="lazy" alt="meal thumbnail" />
        </AspectRatio>
      </CardOverflow>

      {/* Recipe card content */}
      {/* Display the recipe name and tags */}
      <RecipeCard recipe={recipe} />

      {/* Display a button to view the recipe */}
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
  );
};

export default FloatingCard;
