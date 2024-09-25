/**
 * Parses a JSON string and returns an object with the parsed data.
 * @param jsonString - The JSON string to be parsed.
 * @returns An object with the parsed data.
 * @author -solo925
 */
export const parsedData: {
    name: string;
    age: number;
    } = JSON.parse('{"name": "Alice", "age": 30}');