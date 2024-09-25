"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.describe)('appElement existence check', () => {
    (0, vitest_1.it)('should find the app element when present', () => {
        // Mock the DOM environment by adding a fake app element
        const mockAppElement = document.createElement('div');
        mockAppElement.id = 'app';
        document.body.appendChild(mockAppElement);
        const appElement = document.getElementById('app');
        // Check if the element was found
        (0, vitest_1.expect)(appElement).toBeTruthy(); // Ensures the element exists and isn't null
    });
    (0, vitest_1.it)('should throw an error if the app element is missing', () => {
        // Ensure no element with ID 'app' exists in the DOM
        document.body.innerHTML = ''; // Reset the DOM
        (0, vitest_1.expect)(() => {
            const appElement = document.getElementById('app');
            if (!appElement) {
                throw new Error('Could not find app element');
            }
        }).toThrow('Could not find app element');
    });
});
