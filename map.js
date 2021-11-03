// map to take two arguments..
//1. array to map..
//2. callback function..

const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);
const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
   //console.log(`item BEFORE: `, item);
   //console.log(`item AFTER: `, callback(item));
   //console.log('---');
} 
  return results;
}

const assertArraysEqual = function (setA, setB) {
  for (let i = 0; i < setA.length; i++) {
    if (setA[i] === setB[i]) {
      //[A]-actual  //[B]-expected
      console.log(`🟥|💥Assertion Failed💥|❌: ${setA} !== ${setB}`);
    }
  }                                           //[A]-actual  //[B]-expected
  console.log(`🟩|✨Assertion Passed✨|⭕: ${setA} === ${setB}`);
};

const eqArrays = function(setA, setB) {
  // log setA, setB lengths..
  if (setA.length === setB.length) {
    //console.log("[A]:length matched..");
    for (let i = 0; i < setA.length && setB.length; i++) {
      if (setA[i] !== setB[i]) {
        //console.log(`[${i}]:[sA:${setA[i]}],[sB:${setB[i]}] <- misMatch`);
        //console.log(`[${i}]:oh..`);
        return false;
      }
      //console.log(`[${i}]:ok..`);
    } 
    //console.log("apparently true..");
    return true;
  } 
};

const specimen_A = map(words, word => word[0]);
assertArraysEqual(specimen_A, [ 'a', 'd', 'g', 'j', 'u' ]);
const specimen_R = map(words, word => word.length);
assertArraysEqual(specimen_R, [ '6', '7', '2', '5', '3']);


//module.exports = map;
