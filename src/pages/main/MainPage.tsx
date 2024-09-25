import { useState } from "react";
import { recipe } from "../../interfaces/interfaces";
import NavigationBar from "../components/NavigationBar";
import WelcomeSection from "./WelcomeSection";
import RecipesMain from "./RecipesMain";
import { useNavbarHeight } from "../../hooks/useNavbarHeight";

export default function MainPage() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  // Use custom hook to get navbar ref and height
  const { navbarRef, navbarHeight } = useNavbarHeight();

  return (
    <>
      <div
        ref={navbarRef}
        style={{ height: navbarHeight, position: "relative" }}
      >
        <NavigationBar />
      </div>
      <WelcomeSection navbarHeight={navbarHeight} />
      <RecipesMain recipes={recipes} setRecipes={setRecipes} />
    </>
  );
}
