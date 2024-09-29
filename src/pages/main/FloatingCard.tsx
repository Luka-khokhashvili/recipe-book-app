import { recipe } from "../../interfaces/interfaces";
import RecipeCard from "./RecipeCard";
import { Card, CardActions, CardOverflow, AspectRatio, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const FloatingCard = ({ recipe }: { recipe: recipe }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when in view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <Card
      ref={ref}
      sx={{
        width: 366,
        maxWidth: "100%",
        boxShadow: "lg",
        m: "1%",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        "@media screen and (max-width: 768px) and (min-width: 436px)": {
          maxWidth: "42%",
        },
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={recipe.strMealThumb} loading="lazy" alt="meal thumbnail" />
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
  );
};

export default FloatingCard;
