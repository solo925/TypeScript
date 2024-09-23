// stringUtils.ts
export const concatTwoStrings = (a: string, b: string): string => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Both inputs must be strings');
  }
  return [a, b].join(" ");
};
