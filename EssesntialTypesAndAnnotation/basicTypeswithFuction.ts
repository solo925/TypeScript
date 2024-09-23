// basicTypeswithFuction.ts
export function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both inputs must be numbers');
  }
  return a + b;
}
