const tail = function(set) {
  let elseSet = set.slice(1);
  //console.log(`set: ${set}`);
  //console.log(`elseSet: ${elseSet}`);
  return elseSet;
};

// Function: Assertion Implementation..
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
  } else {
    console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
  }
};

// Test Case: Check the original array..
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

/*// Other Scenarios:..
const words2 = ["Yo Yo"];
console.log(tail(words2));
const words3 = [];
console.log(tail(words3));
*/