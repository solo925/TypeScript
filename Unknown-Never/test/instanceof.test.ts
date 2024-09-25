import { describe, expect, it } from 'vitest';

describe('parseValue function', () => {
  it('Should handle a { data: { id: string } }', () => {
    const result = parseValue({
      data: {
        id: '123',
      },
    });

    // Type assertion check
    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe('123');
  });

  it('Should error when anything else is passed in', () => {
    expect(() => parseValue('123')).toThrow('Parsing error!');
    expect(() => parseValue(123)).toThrow('Parsing error!');
    expect(() => parseValue(null)).toThrow('Parsing error!');
    expect(() => parseValue({})).toThrow('Parsing error!');
    expect(() =>
      parseValue({ data: { id: 123 } }) // Wrong type for id
    ).toThrow('Parsing error!');
  });
});
