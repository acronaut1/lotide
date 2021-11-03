// eqArray WIP...a.02
const eqArrays = function(setA, setB) {
  // log setA, setB lengths..
  if (setA.length === setB.length) {
    //console.log("[A]:length matched..");
    for (let i = 0; i < setA.length && setB.length; i++) {
      if (setA[i] !== setB[i]) {
        //console.log(`[${i}]:[sA:${setA[i]}],[sB:${setB[i]}] <- misMatch`);
        //console.log(`[${i}]:oh..`);
        return false;
      }
      //console.log(`[${i}]:ok..`);
    } 
    //console.log("apparently true..");
    return true;
  } 
};

// assertArrayEqual WIP...a.01-base
// (let i = 0; i < setA.length && setB.length; i++)
const assertArraysEqual = function (setA, setB) {
  for (let i = 0; i < setA.length; i++) {
    if (setA[i] !== setB[i]) {
      //[A]-actual  //[B]-expected
      console.log(`🟥|💥Assertion Failed💥|❌: ${setA} !== ${setB}`);
    }
  }                                           //[A]-actual  //[B]-expected
  console.log(`🟩|✨Assertion Passed✨|⭕: ${setA} === ${setB}`);
};

 const takeUntil = function(array, callback) {
   const results = [];
   for (let i = 0; !callback(array[i]); i++) {
     results.push(array[i])
    }
    return results;
  }

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  console.log('---');
    
  const data2 = ["I\'ve", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);
  
  // const data3 = [0.4, 0.3, 0.2, 0.03, 0.044, 0.2331, 0.3333, 34.20];
  // const results3 = takeUntil(data3, x => x < 0);
  // console.log(results3);
  // console.log('---');  // [JS heap out of memory..]
