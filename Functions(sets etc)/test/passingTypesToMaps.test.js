"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.describe)('userMap tests', () => {
    (0, vitest_1.it)('correctly creates and populates the Map', () => {
        const userMap = new Map();
        userMap.set(1, { name: "Max", age: 30 });
        userMap.set(2, { name: "Manuel", age: 31 });
        userMap.set(3, { name: "Anna", age: 29 });
        // Check if the map has the expected entries
        (0, vitest_1.expect)(userMap.get(1)).toEqual({ name: "Max", age: 30 });
        (0, vitest_1.expect)(userMap.get(2)).toEqual({ name: "Manuel", age: 31 });
        (0, vitest_1.expect)(userMap.get(3)).toEqual({ name: "Anna", age: 29 });
        // Check the size of the map
        (0, vitest_1.expect)(userMap.size).toBe(3);
    });
    (0, vitest_1.it)('returns undefined for non-existent keys', () => {
        const userMap = new Map();
        userMap.set(1, { name: "Max", age: 30 });
        // Non-existent key
        (0, vitest_1.expect)(userMap.get(99)).toBeUndefined();
    });
    (0, vitest_1.it)('allows updating the values for an existing key', () => {
        const userMap = new Map();
        userMap.set(1, { name: "Max", age: 30 });
        userMap.set(1, { name: "Maximilian", age: 31 });
        // Ensure the value has been updated
        (0, vitest_1.expect)(userMap.get(1)).toEqual({ name: "Maximilian", age: 31 });
    });
});
