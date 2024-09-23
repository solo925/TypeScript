export const integrateExamples = (
    str: string,
    num: number,
    bool: boolean,
    sym: symbol,
    bigInt: bigint
  ): string => {
    return `${str} ${num} ${bool} ${String(sym)} ${bigInt}`;
  };
  