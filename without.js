const eqArrays = function(arrA, arrB) {
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length && arrB.length; i++) {
      if (arrA[i] !== arrB[i]) {
        return false;
      }
    } 
    return true;
  } 
};


const assertArraysEqual = function (arrA, arrB) {
  for (let i = 0; i < arrA.length && arrB.length; i++) {
    if (arrA[i] !== arrB[i]) {                  
      console.log(`🟥|💥Assertion Failed💥|❌: ${arrA} !== ${arrB}`);
    }
  }                                           
  console.log(`🟩|✨Assertion Passed✨|⭕: ${arrA} === ${arrB}`);
};
// arrA - Actual..
// arrB - Expected..

const without = function(arrSRC, itms2rm) {
  //let arrSANS = arrSRC;
  let result = [];
  for (let i = 0; i < arrSRC.length; i++) {
    if(!itms2rm.includes(arrSRC[i])) {
      result.push(arrSRC[i]);
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

///*✅*/console.log(without(words, ["lighthouse"])); 
///*✅*/console.log(words); 