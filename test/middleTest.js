const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), 2);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), '5');
  });

  it("returns '6' for ['5,6,7']", () => {
    assert.deepEqual(middle([5,6,7]), 6);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), 'Lighthouse');
  });

});