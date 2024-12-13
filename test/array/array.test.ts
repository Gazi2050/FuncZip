import { chunkArray, averageArray } from "../../src/array/array"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testChunkArray = chunkArray(arr, 3)
const testAverageArray = averageArray(arr)
console.log(testChunkArray);
console.log(testAverageArray);