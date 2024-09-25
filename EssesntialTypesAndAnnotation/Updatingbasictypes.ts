
/**
 * This function integrates different types
 * @param str - string type
 * @param num - number type
 * @param bool - boolean type
 * @param sym - symbol type
 * @param bigInt - bigint type
 * @returns a string that shows the integration of the types
 * 
 * @author - Solomon
 */
export const integrateExamples = (
    str: string,
    num: number,
    bool: boolean,
    sym: symbol,
    bigInt: bigint
  ): string => {
    return `${str} ${num} ${bool} ${String(sym)} ${bigInt}`;
  };
/******  a818b826-5234-4592-bc58-27a07f74a2e6  *******/
  