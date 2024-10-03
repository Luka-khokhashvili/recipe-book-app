import axios from "axios";
import { recipe } from "./interfaces/interfaces";

export const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/search.php",
  timeout: 5000,
});

/**
 * Fetches recipes from the MealDB API.
 *
 * @param {function} setRecipe - A callback function that is called with the
 *   array of recipes fetched from the API.
 */
export async function getRecipes(setRecipe: (recipes: recipe[]) => void) {
  try {
    // Make a GET request to the API to fetch recipes. The response should be
    // an object with a "meals" key that contains an array of recipe objects.
    const response = await axiosInstance.get("?s=");
    const data = response.data;

    // Check if the response contains the expected data. If it does, call the
    // callback function with the array of recipes.
    if (data && data.meals) {
      setRecipe(data.meals);
    }
  } catch (error) {
    // Log any errors to the console.
    console.error("Failed to fetch recipes:", error);
  }
}

/**
 * Fetches a recipe by name from the MealDB API.
 *
 * @param {string | undefined} name - The name of the recipe to fetch.
 * @returns {Promise<recipe | null>} - A promise that resolves to the recipe
 *   object, or null if the recipe is not found.
 */
export async function findRecipe(
  name: string | undefined
): Promise<recipe | null> {
  try {
    // Make a GET request to the MealDB API to fetch the recipe
    const response = await axiosInstance.get(`?s=${name}`);
    const data = response.data;

    // If the response contains a recipe, return it
    if (data && data.meals && data.meals.length > 0) {
      return data.meals[0];
    } else {
      // Otherwise, return null
      return null;
    }
  } catch (error) {
    // Log an error message to the console if the request fails
    console.error(`Failed to fetch recipe with ID ${name}:`, error);

    // Throw an error that the caller can catch and handle
    throw new Error(
      "There was an error retrieving the recipe. Please try again."
    );
  }
}
