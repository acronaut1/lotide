const findKeyByValue = function(key, str) {
let keys = Object.keys(key);


for (let k of keys) {
  if (key[k] === str) {
    return k;
  }
}

//console.log(Object.keys(key));
console.table(Object.keys(key));

};


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed 🟩: ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed 🟥: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Star Wars"), "sci_fi");

