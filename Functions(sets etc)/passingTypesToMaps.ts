/**
 * Creates a new Map instance with number keys and objects with name and age properties as values.
 * The map is populated with three key-value pairs:
 * - Key 1 maps to an object with name "Max" and age 30
 * - Key 2 maps to an object with name "Manuel" and age 31
 * - Key 3 maps to an object with name "Anna" and age 29
 * 
 * @author -solo925
 */
export const userMap =new Map<number, {name:string,age:number}>();

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });
userMap.set(3, { name: "Anna", age: 29 });

// var Map: MapConstructor
// new () => Map<any, any> ()