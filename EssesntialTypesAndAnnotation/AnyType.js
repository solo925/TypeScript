"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormData = void 0;
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target); // e.
    const value = Object.fromEntries(data.entries());
    return value;
};
exports.handleFormData = handleFormData;
