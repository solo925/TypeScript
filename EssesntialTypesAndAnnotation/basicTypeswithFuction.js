"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
// basicTypeswithFuction.ts
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both inputs must be numbers');
    }
    return a + b;
}
