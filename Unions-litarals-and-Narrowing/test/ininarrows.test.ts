import { describe, expect, it } from 'vitest';
import { handleResponse } from '../ininarrows'; // Adjust path accordingly

describe('handleResponse', () => {
  it('should return the id when data is present in the response', () => {
    const response = {
      data: {
        id: '12345',
      },
    };

    const result = handleResponse(response);
    expect(result).toBe('12345');  // Expects to return the id
  });

  it('should throw an error when error is present in the response', () => {
    const response = {
      error: 'Invalid argument',
    };

    expect(() => handleResponse(response)).toThrowError('Invalid argument');
  });
});
