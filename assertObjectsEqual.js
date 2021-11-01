const assertArraysEqual = function (actual, expected) {
  for (let i = 0; i < actual.length && expected.length; i++) {
    if (actual[i] !== expected[i]) {
      //[A]-actual  //[B]-expected
      console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
    }
  }                                           //[A]-actual  //[B]-expected
  console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  console.log(`Example label: ${inspect(expected)}`);
  const obj1_keys = Object.keys(actual)
  const obj2_keys = Object.keys(expected)

//console.log(`o1L:`, obj1_keys.length, ` | o2L:`, obj2_keys.length);
if(obj1_keys.length !== obj2_keys.length) {
  //console.log("STOP!");
  return false;
}
// loop thru keys from 1-obj (not both); keys are array..  
for (let values of obj1_keys) {
  //console.log(`arr.isArray(obj1_keys[values]):`, Array.isArray(obj1_keys));
  //console.log(`arr.isArray(obj2_keys[values]):`, Array.isArray(obj2_keys));
  if (Array.isArray(obj1_keys[values]) && Array.isArray(obj2_keys[values])) {
    if (eqArrays(obj1_keys, obj2_keys)) {
      console.log("TRUE"); 
      return true;
    } else {
      if (obj1_keys !== obj2_keys) {
        console.log("FALSE");
        return false;
      }
    }
  }
}
return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ab);  // => true
assertArraysEqual(assertObjectsEqual(ab, ba), true);  // => true
console.log(`eqObjects (ab, ba):`, assertObjectsEqual(ab, ab));

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertArraysEqual(assertObjectsEqual(ab, abc), true); // => false
console.log(`eqObjects (ab, abc):`, assertObjectsEqual(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertArraysEqual(assertObjectsEqual(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertArraysEqual(assertObjectsEqual(cd, cd2), true); // => false


