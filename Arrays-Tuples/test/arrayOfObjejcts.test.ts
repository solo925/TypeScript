import { describe, expect, it } from 'vitest';

type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  instructions?: string;
  ingredients: Ingredient[];
};

export const processRecipe = (recipe: Recipe) => {
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
      throw new Error("Recipe must include ingredients.");
    }
    // Do something with the recipe in here
    return recipe; // Return the recipe for testing
  };

describe('processRecipe function', () => {
  it('correctly processes a recipe with ingredients', () => {
    const recipe = {
      title: "Chocolate Chip Cookies",
      ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
      ],
    };

    const result = processRecipe(recipe);

    // Check if the result matches the input recipe
    expect(result).toEqual(recipe);
  });

  it('returns a recipe with optional instructions', () => {
    const recipe = {
      title: "Pancakes",
      instructions: "Mix ingredients and cook on a hot griddle.",
      ingredients: [
        { name: "Flour", quantity: "1 cup" },
        { name: "Milk", quantity: "1 cup" },
      ],
    };

    const result = processRecipe(recipe);

    // Check if the result matches the input recipe
    expect(result).toEqual(recipe);
  });

  it('throws an error if ingredients are missing', () => {
    const recipe = {
      title: "Omelette",
      // instructions: "Beat eggs and cook in a pan.", // Commented out to test missing ingredients
    };

    // Check if an error is thrown when ingredients are missing
    expect(() => processRecipe(recipe as Recipe)).toThrow();
  });
});
