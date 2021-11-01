const tail = function(set) {
  let elseSet = set.slice(1);
  //console.log(`set: ${set}`);
  //console.log(`elseSet: ${elseSet}`);
  return elseSet;
};


/*// Other Scenarios:..
const words2 = ["Yo Yo"];
console.log(tail(words2));
const words3 = [];
console.log(tail(words3));
*/

module.exports = tail;