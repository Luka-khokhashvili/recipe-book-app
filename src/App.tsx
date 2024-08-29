import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/search.php",
  timeout: 1000,
});

interface recipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

function App() {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axiosInstance.get("?s=");
        const data = response.data;

        if (data && data.meals) {
          setRecipes(data.meals);
        }
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }

    getRecipes();
  }, []);

  return (
    <div className="App">
      <h1>{recipes && recipes.strMeal}</h1>
    </div>
  );
}

export default App;
