const eqArrays = require('./eqArrays');

// assertArrayEqual WIP...a.01-base
// (let i = 0; i < setA.length && setB.length; i++)
const assertArraysEqual = function (setA, setB) {
  for (let i = 0; i < setA.length; i++) {
    if (setA[i] !== setB[i]) {
      //[A]-actual  //[B]-expected
      console.log(`🟥|💥Assertion Failed💥|❌: ${setA} !== ${setB}`);
    }
  }                                           //[A]-actual  //[B]-expected
  console.log(`🟩|✨Assertion Passed✨|⭕: ${setA} === ${setB}`);
};



  module.exports = assertArraysEqual;