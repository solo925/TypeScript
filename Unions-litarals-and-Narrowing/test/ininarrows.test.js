"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ininarrows_1 = require("../ininarrows"); // Adjust path accordingly
(0, vitest_1.describe)('handleResponse', () => {
    (0, vitest_1.it)('should return the id when data is present in the response', () => {
        const response = {
            data: {
                id: '12345',
            },
        };
        const result = (0, ininarrows_1.handleResponse)(response);
        (0, vitest_1.expect)(result).toBe('12345'); // Expects to return the id
    });
    (0, vitest_1.it)('should throw an error when error is present in the response', () => {
        const response = {
            error: 'Invalid argument',
        };
        (0, vitest_1.expect)(() => (0, ininarrows_1.handleResponse)(response)).toThrowError('Invalid argument');
    });
});
