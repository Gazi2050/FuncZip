import { mergeObjects } from "../../src/object/object"
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 'one', b: 'two', c: 'three' };
const obj3 = { e: 'one', f: 'two', g: 'three' }
const obj4 = { e: 4, f: 5, g: 6 }
const obj5 = { a: 4, b: 5, c: 6 }
const obj6 = { a: 'four', b: 'five', c: 'six' }

// shallow
const shallowMerged1 = mergeObjects(obj1, obj2, "shallow"); //same key different type of value
const shallowMerged2 = mergeObjects(obj1, obj3, "shallow"); //different key different type of value
const shallowMerged3 = mergeObjects(obj1, obj4, "shallow"); //different key same type of value
const shallowMerged4 = mergeObjects(obj1, obj5, "shallow"); //same key same type of value (number)
const shallowMerged5 = mergeObjects(obj2, obj6, "shallow"); //same key same type of value (string)
// deep
const deepMerged1 = mergeObjects(obj1, obj2, "deep"); //same key different type of value
const deepMerged2 = mergeObjects(obj1, obj3, "deep"); //different key different type of value
const deepMerged3 = mergeObjects(obj1, obj4, "deep"); //different key same type of value
const deepMerged4 = mergeObjects(obj1, obj5, "deep"); //same key same type of value (number)
const deepMerged5 = mergeObjects(obj2, obj6, "deep"); //same key same type of value (string)
