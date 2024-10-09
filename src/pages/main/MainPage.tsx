import { useEffect, useState } from "react";
import { recipe } from "../../interfaces/interfaces";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import WelcomeSection from "./WelcomeSection";
import RecipesMain from "./RecipesMain";
import { getRecipes } from "../../ApiCall";

export default function MainPage() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  useEffect(() => {
    getRecipes((setRecipe) => setRecipes(setRecipe));
  }, []);

  return (
    <>
      <NavigationBar recipes={recipes} />
      <WelcomeSection />
      <RecipesMain recipes={recipes} />
    </>
  );
}
