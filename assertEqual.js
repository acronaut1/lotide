// Function Implementation..
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟩|✨Assertion Passed✨|⭕: " + actual + " === " + expected);
  } else {
    console.log("🟥|💥Assertion Failed💥|❌: " + actual + " !== " + expected);
  }
};

// Test Code..
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
// [Additional Tests]..
// {compare identical strings}..
assertEqual("Toronto", "Toronto");
// {compare non-identical strings}..
assertEqual("Ontario", "Canada");
// {compare identical numbers}..
assertEqual(13,13);
// {compare non-identical numbers}..
assertEqual(64,33);



