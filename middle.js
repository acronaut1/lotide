

// const eqArrays = function(arrA, arrB) {
//   if (arrA.length === arrB.length) {
//     for (let i = 0; i < arrA.length && arrB.length; i++) {
//       if (arrA[i] !== arrB[i]) {
//         return false;
//       }
//     } 
//     return true;
//   } 
// };


// const assertArraysEqual = function (arrA, arrB) {
//   for (let i = 0; i < arrA.length && arrB.length; i++) {
//     if (arrA[i] !== arrB[i]) {                  
//       console.log(`🟥|💥Assertion Failed💥|❌: ${arrA} !== ${arrB}`);
//     }
//   }                                           
//   console.log(`🟩|✨Assertion Passed✨|⭕: ${arrA} === ${arrB}`);
// };
// // arrA - Actual..
// // arrB - Expected..

const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) {
    //console.log("nullify it..");
    return [];
  }
  if (arr.length % 2 === 0) {
    // let middler = (arr.length - 1) / 2
    let middler = arr[Math.floor(arr.length / 2) - 1];
    return [ arr[middler] - 1, arr[middler]];
  } else {
    let middler = arr[Math.floor(arr.length / 2)];  
    //console.log(middler);
    return middler;
  }
};

// 1st
// console.log(/*"1:--->",*/ middle([1]));             // => []
// console.log(/*"2:--->",*/ middle([1, 2]));          // => []
// // 2nd
// console.log(/*"3:--->",*/ middle([1,2,3]));         // => [2]
// console.log(/*"4:--->",*/ middle([1,2,3,4,5]));     // => [3]
// // 3rd
// console.log(/*"5:--->",*/ middle([1,2,3,4]))       // => [2,3]
// console.log(/*"6:--->",*/ middle([1,2,3,4,5,6]))   // => [3,4]
// // more..
// console.log(/*"7:--->",*/ middle([1,2,3,4,5,6,7,8]))        // => [4,5]
// console.log(/*"8:--->",*/ middle([1,2,3,4,5,6,7,8,9,10]))   // => [5,6]

// assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);

module.exports = middle;