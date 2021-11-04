const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) {
    //console.log("nullify it..");
    return arr[0];
  }
  if (arr.length % 2 === 0) {
    // let middler = (arr.length - 1) / 2
    let middler = arr[Math.floor(arr.length / 2) - 1];
    return [ arr[middler] - 1, arr[middler]];
  } else {
    let middler = arr[Math.floor(arr.length / 2)];  
    //console.log(middler);
    return middler;
  }
};


module.exports = middle;