"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basictypes.test.ts
const basicTypeswithFuction_1 = require("../basicTypeswithFuction");
describe('add function', () => {
    it('adds two positive numbers', () => {
        expect((0, basicTypeswithFuction_1.add)(2, 3)).toBe(5);
    });
    it('adds two decimal numbers', () => {
        expect((0, basicTypeswithFuction_1.add)(2.5, 3.7)).toBeCloseTo(6.2);
    });
    it('throws an error for non-number inputs', () => {
        expect(() => (0, basicTypeswithFuction_1.add)('a', 2)).toThrowError(TypeError);
        expect(() => (0, basicTypeswithFuction_1.add)(2, 'b')).toThrowError(TypeError);
        expect(() => (0, basicTypeswithFuction_1.add)(null, 2)).toThrowError(TypeError);
    });
});
