"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appElement = void 0;
exports.appElement = document.getElementById('app');
if (!exports.appElement) {
    throw new Error('Could not find app element');
}
