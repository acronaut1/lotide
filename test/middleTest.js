const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// 1st
console.log(/*"1:--->",*/ middle([1]));             // => []
console.log(/*"2:--->",*/ middle([1, 2]));          // => []
// 2nd
console.log(/*"3:--->",*/ middle([1,2,3]));         // => [2]
console.log(/*"4:--->",*/ middle([1,2,3,4,5]));     // => [3]
// 3rd
console.log(/*"5:--->",*/ middle([1,2,3,4]))       // => [2,3]
console.log(/*"6:--->",*/ middle([1,2,3,4,5,6]))   // => [3,4]
// more..
console.log(/*"7:--->",*/ middle([1,2,3,4,5,6,7,8]))        // => [4,5]
console.log(/*"8:--->",*/ middle([1,2,3,4,5,6,7,8,9,10]))   // => [5,6]

//assertArraysEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);
assertArraysEqual(([1,2,3], [1,2,3]), true);