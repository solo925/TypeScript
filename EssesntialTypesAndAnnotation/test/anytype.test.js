"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    return value;
};
(0, vitest_1.describe)('handleFormData function', () => {
    (0, vitest_1.it)('correctly processes form data', () => {
        const mockEvent = {
            preventDefault: vitest_1.vi.fn(),
            target: {
                // Simulate an HTML form with elements
                elements: {
                    name: { value: 'John' },
                    age: { value: '30' },
                },
            },
        };
        const result = handleFormData(mockEvent);
        (0, vitest_1.expect)(result).toEqual({ name: 'John', age: '30' });
    });
    (0, vitest_1.it)('throws an error when target is not provided', () => {
        const mockEvent = {
            preventDefault: vitest_1.vi.fn(),
            target: null, // No target
        };
        (0, vitest_1.expect)(() => handleFormData(mockEvent)).toThrow();
    });
    (0, vitest_1.it)('handles empty form data', () => {
        const mockEvent = {
            preventDefault: vitest_1.vi.fn(),
            target: {
                // Mock an empty form
                elements: {},
            },
        };
        const result = handleFormData(mockEvent);
        (0, vitest_1.expect)(result).toEqual({});
    });
    (0, vitest_1.it)('handles form data with additional fields', () => {
        const mockEvent = {
            preventDefault: vitest_1.vi.fn(),
            target: {
                // Simulate a form with additional fields
                elements: {
                    email: { value: 'john@example.com' },
                    password: { value: 'secret' },
                },
            },
        };
        const result = handleFormData(mockEvent);
        (0, vitest_1.expect)(result).toEqual({ email: 'john@example.com', password: 'secret' });
    });
});
