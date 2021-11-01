const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩|✨Assertion Passed✨|⭕: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🟥|💥Assertion Failed💥|❌: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
const obj1_keys = Object.keys(object1)
const obj2_keys = Object.keys(object2)

// console.log(`o1k:`, obj1_keys);
// console.log(`o2k:`, obj2_keys);
// console.log(`o1L:`, Object.keys(object1).length);
// console.log(`o2L:`, Object.keys(object2).length);

//console.log(`o2k:`, obj2_keys);
// compare lengths; !== no point going further.

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

//(nEQarrs(obj1_Keys, obj2_Keys))  <- for 21
//!eqArrays

 const ab = { a: "1", b: "2" };
 const ba = { b: "2", a: "1" };
 //eqObjects(ab, ab);  // => true
assertEqual(eqObjects(ab, ba), true);  // => true
console.log(`eqObjects (ab, ba):`, eqObjects(ab, ab));

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), true); // => false
console.log(`eqObjects (ab, abc):`, eqObjects(ab, abc));


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false


