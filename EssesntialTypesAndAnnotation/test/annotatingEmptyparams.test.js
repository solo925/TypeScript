"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// stringUtils.test.ts
const annotatingEmptyparam_1 = require("../annotatingEmptyparam");
describe('concatTwoStrings function', () => {
    it('concatenates two strings with a space', () => {
        expect((0, annotatingEmptyparam_1.concatTwoStrings)('Hello', 'World')).toBe('Hello World');
    });
    it('handles empty strings', () => {
        expect((0, annotatingEmptyparam_1.concatTwoStrings)('', 'World')).toBe(' World');
        expect((0, annotatingEmptyparam_1.concatTwoStrings)('Hello', '')).toBe('Hello ');
        expect((0, annotatingEmptyparam_1.concatTwoStrings)('', '')).toBe(' ');
    });
    it('throws an error for non-string inputs', () => {
        expect(() => (0, annotatingEmptyparam_1.concatTwoStrings)(1, 'World')).toThrowError(TypeError);
        expect(() => (0, annotatingEmptyparam_1.concatTwoStrings)('Hello', 2)).toThrowError(TypeError);
        expect(() => (0, annotatingEmptyparam_1.concatTwoStrings)(null, 'World')).toThrowError(TypeError);
        expect(() => (0, annotatingEmptyparam_1.concatTwoStrings)('Hello', null)).toThrowError(TypeError);
    });
});
