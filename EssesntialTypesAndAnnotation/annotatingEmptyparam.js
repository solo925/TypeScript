"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatTwoStrings = void 0;
// stringUtils.ts
const concatTwoStrings = (a, b) => {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new TypeError('Both inputs must be strings');
    }
    return [a, b].join(" ");
};
exports.concatTwoStrings = concatTwoStrings;
