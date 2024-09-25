import { describe, expect, it } from 'vitest';

describe('JSON Parsing', () => {
  it('correctly parses JSON string into an object', () => {
    const jsonString = '{"name": "Alice", "age": 30}';
    const parsedData = JSON.parse(jsonString) as { name: string; age: number };
    
    expect(parsedData).toEqual({
      name: 'Alice',
      age: 30,
    });
  });

  it('throws an error when parsing invalid JSON string', () => {
    const invalidJsonString = '{"name": "Alice", "age": }'; // Invalid JSON

    expect(() => JSON.parse(invalidJsonString)).toThrow(SyntaxError);
  });
});
