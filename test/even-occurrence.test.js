const assert = require("chai").assert;
const evenOccurrence = require("../src/even-occurrence");

describe("evenOccurrence", function() {
  it("should return 2 if given [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]", function() {
       assert.equal(evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]), 2)
  });
  it("should return 'cat' if given [ 'cat', 'dog', 'dig', 'cat' ]", function() {
    assert.equal(evenOccurrence([ "cat", "dog", "dig", "cat" ]), "cat")
});
  it("should return null if given [ 'one', 'two', 'three' ]", function() {
    assert.equal(evenOccurrence([ 'one', 'two', 'three' ]), null)
});

});
