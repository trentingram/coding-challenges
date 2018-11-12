const assert = require("chai").assert;
const largestProductFromThree = require("../src/largest-product");

describe("largestProductFromThree", function() {
  it("should return 42 if given [2, 1, 3, 7]", function() {
       assert.equal(largestProductFromThree([2, 1, 3, 7]), 42)
  });
  it("should return 0 if given [0, 2, 3]", function() {
    assert.equal(largestProductFromThree([0, 2, 3]), 0)
});

});