const assertEqual = require('../assertEqual');
 
// assertEqual.js


// Test Code..
assertEqual("Lighthouse Labs II", "Bootcamp");
assertEqual(1,1);
// [Additional Tests]..
// {compare identical strings}..
assertEqual("Toronto", "Toronto");
// {compare non-identical strings}..
assertEqual("Ontario", "Canada");
// {compare identical numbers}..
assertEqual(13,13);
// {compare non-identical numbers}..
assertEqual(64,33);



//module.exports = assertEqual;