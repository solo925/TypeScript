// basictypes.test.ts
import { add } from '../basicTypeswithFuction';

describe('add function', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds two decimal numbers', () => {
    expect(add(2.5, 3.7)).toBeCloseTo(6.2);
  });

  it('throws an error for non-number inputs', () => {
    expect(() => add('a' as any, 2)).toThrowError(TypeError);
    expect(() => add(2, 'b' as any)).toThrowError(TypeError);
    expect(() => add(null as any, 2)).toThrowError(TypeError);
  });
});
