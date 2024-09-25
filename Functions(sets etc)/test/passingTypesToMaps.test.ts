import { describe, expect, it } from 'vitest';

describe('userMap tests', () => {
  it('correctly creates and populates the Map', () => {
    const userMap = new Map<number, { name: string; age: number }>();

    userMap.set(1, { name: "Max", age: 30 });
    userMap.set(2, { name: "Manuel", age: 31 });
    userMap.set(3, { name: "Anna", age: 29 });

    // Check if the map has the expected entries
    expect(userMap.get(1)).toEqual({ name: "Max", age: 30 });
    expect(userMap.get(2)).toEqual({ name: "Manuel", age: 31 });
    expect(userMap.get(3)).toEqual({ name: "Anna", age: 29 });

    // Check the size of the map
    expect(userMap.size).toBe(3);
  });

  it('returns undefined for non-existent keys', () => {
    const userMap = new Map<number, { name: string; age: number }>();

    userMap.set(1, { name: "Max", age: 30 });

    // Non-existent key
    expect(userMap.get(99)).toBeUndefined();
  });

  it('allows updating the values for an existing key', () => {
    const userMap = new Map<number, { name: string; age: number }>();

    userMap.set(1, { name: "Max", age: 30 });
    userMap.set(1, { name: "Maximilian", age: 31 });

    // Ensure the value has been updated
    expect(userMap.get(1)).toEqual({ name: "Maximilian", age: 31 });
  });
});
