"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.describe)('JSON Parsing', () => {
    (0, vitest_1.it)('correctly parses JSON string into an object', () => {
        const jsonString = '{"name": "Alice", "age": 30}';
        const parsedData = JSON.parse(jsonString);
        (0, vitest_1.expect)(parsedData).toEqual({
            name: 'Alice',
            age: 30,
        });
    });
    (0, vitest_1.it)('throws an error when parsing invalid JSON string', () => {
        const invalidJsonString = '{"name": "Alice", "age": }'; // Invalid JSON
        (0, vitest_1.expect)(() => JSON.parse(invalidJsonString)).toThrow(SyntaxError);
    });
});
