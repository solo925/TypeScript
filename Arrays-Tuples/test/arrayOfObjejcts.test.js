"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRecipe = void 0;
const vitest_1 = require("vitest");
const processRecipe = (recipe) => {
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
        throw new Error("Recipe must include ingredients.");
    }
    // Do something with the recipe in here
    return recipe; // Return the recipe for testing
};
exports.processRecipe = processRecipe;
(0, vitest_1.describe)('processRecipe function', () => {
    (0, vitest_1.it)('correctly processes a recipe with ingredients', () => {
        const recipe = {
            title: "Chocolate Chip Cookies",
            ingredients: [
                { name: "Flour", quantity: "2 cups" },
                { name: "Sugar", quantity: "1 cup" },
            ],
        };
        const result = (0, exports.processRecipe)(recipe);
        // Check if the result matches the input recipe
        (0, vitest_1.expect)(result).toEqual(recipe);
    });
    (0, vitest_1.it)('returns a recipe with optional instructions', () => {
        const recipe = {
            title: "Pancakes",
            instructions: "Mix ingredients and cook on a hot griddle.",
            ingredients: [
                { name: "Flour", quantity: "1 cup" },
                { name: "Milk", quantity: "1 cup" },
            ],
        };
        const result = (0, exports.processRecipe)(recipe);
        // Check if the result matches the input recipe
        (0, vitest_1.expect)(result).toEqual(recipe);
    });
    (0, vitest_1.it)('throws an error if ingredients are missing', () => {
        const recipe = {
            title: "Omelette",
            // instructions: "Beat eggs and cook in a pan.", // Commented out to test missing ingredients
        };
        // Check if an error is thrown when ingredients are missing
        (0, vitest_1.expect)(() => (0, exports.processRecipe)(recipe)).toThrow();
    });
});
