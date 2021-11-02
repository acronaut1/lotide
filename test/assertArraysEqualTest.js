//const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');



  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual([3, 2, 3], [3, 2, 3]);
  assertArraysEqual([4, 2, 3], [1, 2, 3]);
  assertArraysEqual([1, 2, 3], [4, 2, 3]);
  // Next: to add argv?

  //module.exports = assertArraysEqual;