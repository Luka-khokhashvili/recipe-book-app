import { useState } from "react";
import "./App.css";
import { recipe } from "./interfaces";
import NavigationBar from "./components/NavigationBar";
import WelcomeSection from "./components/WelcomeSection";
import RecipesMain from "./components/RecipesMain";

function App() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  return (
    <div className="App">
      <NavigationBar />
      <WelcomeSection />
      <RecipesMain recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;
