import { describe, expect, it } from 'vitest';
import { integrateExamples } from '../Updatingbasictypes'; // Update this path

describe('integrateExamples function', () => {
  it('correctly integrates different types', () => {
    const result = integrateExamples("Hello World!", 42, true, Symbol('symbol'), 123n);
    expect(result).toBe("Hello World! 42 true Symbol(symbol) 123");
  });

  it('handles empty string and zero', () => {
    const result = integrateExamples("", 0, false, Symbol('empty'), 0n);
    expect(result).toBe(" 0 false Symbol(empty) 0");
  });
});
