import { chunkArray, averageArray, shuffleArray, uniqueByKey } from "../../src/array/array"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const obj1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" }, // Duplicate name
];
const obj2 = [
    { id: 1, name: "Laptop", category: { id: 1, name: "Electronics" } },
    { id: 2, name: "Smartphone", category: { id: 1, name: "Electronics" } }, // Duplicate nested key
    { id: 3, name: "Chair", category: { id: 2, name: "Furniture" } },
];
const obj3 = [
    { id: 1, name: "John", department: "HR" },
    { id: 2, name: "Jane", department: "Finance" },
    { id: 3, name: "John", department: "IT" }, // Duplicate name, different department
];
const testChunkArray = chunkArray(arr, 3)
const testAverageArray = averageArray(arr)
const testShuffleArray = shuffleArray(arr)
//Unique by Simple Key
const testUniqueByKey1 = uniqueByKey(obj1, "name");
//Unique by Nested Key
const testUniqueByKey2 = uniqueByKey(obj2, "category.id");
//Unique by Custom Value Extractor Function
const testUniqueByKey3 = uniqueByKey(obj3, (employee) => employee.name);
console.log(testChunkArray);
console.log(testAverageArray);
console.log(testShuffleArray);
console.log(testUniqueByKey1)
console.log(testUniqueByKey2)
console.log(testUniqueByKey3)