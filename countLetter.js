const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed 🟩: ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed 🟥: ${actual} !== ${expected}`);
  }
};

const countLetters = function (itemsToCount) {
  const result = {}
  for (const chr of itemsToCount) {
    if (result[chr]) {
      result[chr] += 1
    } else {
      // playblast-vis. stepper.. 
      //console.log(result);
      //console.log(result[chr] = 1);
      result[chr] = 1;
    }
  }
  console.table(result);
  return result;
};


console.log(countLetters("LHL"));
console.log(countLetters("Lighthouse"));
console.log(countLetters("Lighthouse Labs"));
console.log(countLetters("Light house Labs"));
console.log(countLetters("Agouhanna"));