import axios from "axios";
import { recipe } from "./interfaces";

export const axiosInstance = axios.create({
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

export async function findRecipe(
  name: string | undefined
): Promise<recipe | null> {
  try {
    const response = await axiosInstance.get(`?s=${name}`);
    const data = response.data;

    if (data && data.meals && data.meals.length > 0) {
      return data.meals[0]; // Assuming it returns an array, get the first match
    } else {
      return null; // Return null if no recipe is found
    }
  } catch (error) {
    console.error(`Failed to fetch recipe with ID ${name}:`, error);
    throw new Error(
      "There was an error retrieving the recipe. Please try again."
    );
  }
}
