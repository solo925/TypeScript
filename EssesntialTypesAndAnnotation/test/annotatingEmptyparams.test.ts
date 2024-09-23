// stringUtils.test.ts
import { concatTwoStrings } from '../annotatingEmptyparam';

describe('concatTwoStrings function', () => {
  it('concatenates two strings with a space', () => {
    expect(concatTwoStrings('Hello', 'World')).toBe('Hello World');
  });

  it('handles empty strings', () => {
    expect(concatTwoStrings('', 'World')).toBe(' World');
    expect(concatTwoStrings('Hello', '')).toBe('Hello ');
    expect(concatTwoStrings('', '')).toBe(' ');
  });

  it('throws an error for non-string inputs', () => {
    expect(() => concatTwoStrings(1 as any, 'World')).toThrowError(TypeError);
    expect(() => concatTwoStrings('Hello', 2 as any)).toThrowError(TypeError);
    expect(() => concatTwoStrings(null as any, 'World')).toThrowError(TypeError);
    expect(() => concatTwoStrings('Hello', null as any)).toThrowError(TypeError);
  });
});
