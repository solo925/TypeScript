import { describe, expect, it } from 'vitest';
import { validateUsername } from '../withifstatement'; // Update this path

describe('validateUsername function', () => {
  it('returns true for valid usernames longer than 5 characters', () => {
    expect(validateUsername("ValidUser")).toBe(true);
  });

  it('returns false for usernames with 5 or fewer characters', () => {
    expect(validateUsername("User")).toBe(false);
    expect(validateUsername("Test")).toBe(false);
  });

  it('returns false for null input', () => {
    expect(validateUsername(null)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(validateUsername("")).toBe(false);
  });

  it('returns false for non-string types', () => {
    expect(validateUsername(123 as any)).toBe(false);
    expect(validateUsername({} as any)).toBe(false);
    expect(validateUsername([] as any)).toBe(false);
  });
});
