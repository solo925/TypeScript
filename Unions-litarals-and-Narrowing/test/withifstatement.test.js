"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const withifstatement_1 = require("../withifstatement"); // Update this path
(0, vitest_1.describe)('validateUsername function', () => {
    (0, vitest_1.it)('returns true for valid usernames longer than 5 characters', () => {
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)("ValidUser")).toBe(true);
    });
    (0, vitest_1.it)('returns false for usernames with 5 or fewer characters', () => {
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)("User")).toBe(false);
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)("Test")).toBe(false);
    });
    (0, vitest_1.it)('returns false for null input', () => {
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)(null)).toBe(false);
    });
    (0, vitest_1.it)('returns false for empty string', () => {
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)("")).toBe(false);
    });
    (0, vitest_1.it)('returns false for non-string types', () => {
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)(123)).toBe(false);
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)({})).toBe(false);
        (0, vitest_1.expect)((0, withifstatement_1.validateUsername)([])).toBe(false);
    });
});
