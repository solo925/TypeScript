"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = void 0;
const handleResponse = (response) => {
    if ("data" in response) { // Type guard to check if 'data' is in the response
        return response.data.id;
    }
    else {
        throw new Error(response.error);
    }
};
exports.handleResponse = handleResponse;
