import { useEffect, useState } from "react";
import { recipe } from "../../interfaces/interfaces";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import WelcomeSection from "./WelcomeSection";
import RecipesMain from "./RecipesMain";
import { fetchRecipes } from "../../ApiCall";

/**
 * The main page of the application.
 * This component renders the navigation bar, the welcome section, and the recipes main section.
 * It also fetches the recipes from the API and stores them in the component's state.
 * @returns The main page component
 */
export default function MainPage() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  /**
   * Fetches the recipes from the API and stores them in the component's state.
   * This function is called when the component mounts.
   */
  useEffect(() => {
    fetchRecipes((setRecipe) => setRecipes(setRecipe));
  }, []);

  return (
    <>
      {/* The navigation bar */}
      <NavigationBar recipes={recipes} />

      {/* The welcome section */}
      <WelcomeSection />

      {/* The recipes main section */}
      <RecipesMain recipes={recipes} />
    </>
  );
}
