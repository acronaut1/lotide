// Function Implementation..
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
  } else {
    console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
  }
  return;
};

const findKey = function(object, callback) { 
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}


// Tests
assertEqual(findKey({
  "Blue Hill":  { stars: 4 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 4 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
}, x => x.stars === 4), "Blue Hill") // Pass
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // Pass
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "Akaleri"); // Pass
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), "Ora"); // Pass

module.exports = findKey;