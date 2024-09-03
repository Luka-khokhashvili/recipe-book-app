import { useState } from "react";
import { recipe } from "./interfaces";
import NavigationBar from "./components/NavigationBar";
import WelcomeSection from "./components/WelcomeSection";
import RecipesMain from "./components/RecipesMain";

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
