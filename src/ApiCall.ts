import axios from "axios";
import { recipe } from "./interfaces";

const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/search.php",
  timeout: 1000,
});

export async function getRecipes(setRecipe: (recipes: recipe[]) => void) {
  try {
    const response = await axiosInstance.get("?s=");
    const data = response.data;

    if (data && data.meals) {
      setRecipe(data.meals);
    }
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
  }
}
