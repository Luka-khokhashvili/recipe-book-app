import axios from "axios";
import { recipe } from "./interfaces/interfaces";

export const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/search.php",
  timeout: 5000,
});

/**
 * Fetches recipes from the MealDB API.
 *
 * @param {function} setRecipes - A callback function that is called with the
 *   array of recipes fetched from the API.
 */
export async function fetchRecipes(setRecipes: (recipes: recipe[]) => void) {
  try {
    const response = await axiosInstance.get("?s=");
    const { meals: fetchedRecipes } = response.data;

    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
    } else {
      throw new Error(
        "The response from the API did not contain the expected data."
      );
    }
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw new Error(
      "There was an error retrieving the recipes. Please try again later."
    );
  }
}

/**
 * Fetches a recipe by name from the MealDB API.
 *
 * @param {string} recipeName - The name of the recipe to fetch.
 * @returns {Promise<recipe | null>} - A promise that resolves to the recipe
 *   object, or null if the recipe is not found.
 */
export async function findRecipe(recipeName: string): Promise<recipe | null> {
  const response = await axiosInstance.get(`?s=${recipeName}`);
  const { meals } = response.data;

  if (meals && meals.length > 0) {
    return meals[0];
  } else {
    return null;
  }
}
