const head = function(set) {
  return set[0];
};

// Function: Assertion Implementation..
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
  } else {
    console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
  }
}

// Test Code..
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// {Other Scenarios}..
//assertEqual(head([5]), 5);
//assertEqual(head([]), 5);






