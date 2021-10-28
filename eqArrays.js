// eqArray WIP...a.02
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

// Function Implementation..
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
  } else {
    console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 3, 1, 2, 4], [1, 2, 3, 1, 2, 7]), true);


