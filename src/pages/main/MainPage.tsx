import { useState } from "react";
import { recipe } from "../../interfaces/interfaces";
import NavigationBar from "../components/NavigationBar";
import WelcomeSection from "./WelcomeSection";
import RecipesMain from "./RecipesMain";

export default function MainPage() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  return (
    <>
      <NavigationBar />
      <WelcomeSection />
      <RecipesMain recipes={recipes} setRecipes={setRecipes} />
    </>
  );
}
