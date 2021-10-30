const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here..
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push([i]);
      //console.log(sentence[i]);  seemingly overlapped..
    } else {
      results[sentence[i]] = [i]
    }
  } 
  console.table(results);
  return results;
}


// assertArrayEqual
const assertArraysEqual = function (arr1, arr2) {
  for (let i = 0; i < arr1.length && arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      //[A]-actual  //[B]-expected
      console.log(`🟥|💥Assertion Failed💥|❌: ${arr1} !== ${arr2}`);
    }
  }                                           //[A]-actual  //[B]-expected
  console.log(`🟩|✨Assertion Passed✨|⭕: ${arr1} === ${arr2}`);
};

console.log(letterPositions("This is getting out of hand"));
assertArraysEqual(letterPositions("hello").e, [1]); //✔