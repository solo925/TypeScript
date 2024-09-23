import { describe, expect, it, vi } from 'vitest';

const handleFormData = (e: any) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  return value;
};

describe('handleFormData function', () => {
  it('correctly processes form data', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: {
        // Simulate an HTML form with elements
        elements: {
          name: { value: 'John' },
          age: { value: '30' },
        },
      },
    };

    const result = handleFormData(mockEvent);
    expect(result).toEqual({ name: 'John', age: '30' });
  });

  it('throws an error when target is not provided', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: null, // No target
    };

    expect(() => handleFormData(mockEvent)).toThrow();
  });

  it('handles empty form data', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: {
        // Mock an empty form
        elements: {},
      },
    };

    const result = handleFormData(mockEvent);
    expect(result).toEqual({});
  });

  it('handles form data with additional fields', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: {
        // Simulate a form with additional fields
        elements: {
          email: { value: 'john@example.com' },
          password: { value: 'secret' },
        },
      },
    };

    const result = handleFormData(mockEvent);
    expect(result).toEqual({ email: 'john@example.com', password: 'secret' });
  });
});
