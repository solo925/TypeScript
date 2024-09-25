"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.describe)('parseValue function', () => {
    (0, vitest_1.it)('Should handle a { data: { id: string } }', () => {
        const result = parseValue({
            data: {
                id: '123',
            },
        });
        (0, vitest_1.expect)(result).toBe('123');
    });
    (0, vitest_1.it)('Should error when anything else is passed in', () => {
        (0, vitest_1.expect)(() => parseValue('123')).toThrow('Parsing error!');
        (0, vitest_1.expect)(() => parseValue(123)).toThrow('Parsing error!');
        (0, vitest_1.expect)(() => parseValue(null)).toThrow('Parsing error!');
        (0, vitest_1.expect)(() => parseValue({})).toThrow('Parsing error!');
        (0, vitest_1.expect)(() => parseValue({ data: { id: 123 } }) // Wrong type for id
        ).toThrow('Parsing error!');
    });
});
