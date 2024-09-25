"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Updatingbasictypes_1 = require("../Updatingbasictypes"); // Update this path
(0, vitest_1.describe)('integrateExamples function', () => {
    (0, vitest_1.it)('correctly integrates different types', () => {
        const result = (0, Updatingbasictypes_1.integrateExamples)("Hello World!", 42, true, Symbol('symbol'), 123n);
        (0, vitest_1.expect)(result).toBe("Hello World! 42 true Symbol(symbol) 123");
    });
    (0, vitest_1.it)('handles empty string and zero', () => {
        const result = (0, Updatingbasictypes_1.integrateExamples)("", 0, false, Symbol('empty'), 0n);
        (0, vitest_1.expect)(result).toBe(" 0 false Symbol(empty) 0");
    });
});
