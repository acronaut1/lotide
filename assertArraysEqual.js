// assertArrayEqual WIP...a.01-base
const assertArraysEqual = function(setA, setB) {
    for (let i = 0; i < setA.length && setB.length; i++) {
      if (setA[i] !== setB[i]) {
                                                  //[A]-actual  //[B]-expected
        console.log(`🟥|💥Assertion Failed💥|❌: ${setA} !== ${setB}`);
      }
    }                                           //[A]-actual  //[B]-expected
    console.log(`🟩|✨Assertion Passed✨|⭕: ${setA} === ${setB}`);
  };

  //assertArraysEqual([1, 2, 3], [1, 2, 3]);
  //assertArraysEqual([3, 2, 3], [3, 2, 3]);
  //assertArraysEqual([4, 2, 3], [1, 2, 3]);
  //assertArraysEqual([1, 2, 3], [4, 2, 3]);
  // Next: to add argv?