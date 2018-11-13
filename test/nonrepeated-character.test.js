const assert = require("chai").assert;
const firstNonRepeatedCharacter = require("../src/nonrepeated-character");

describe("firstNonRepeatedCharacter", function() {
  it("output should be a typeof -> string", function() {
    assert.typeOf(firstNonRepeatedCharacter("ALABAMA"), 'string')
});
  it("should return 'A' if given 'ABCD'", function() {
       assert.equal(firstNonRepeatedCharacter("A"), "A")
  });
  it("should return 'sorry' if given 'XXXXX'", function() {
    assert.equal(firstNonRepeatedCharacter("XXXXX"), "sorry")
});
it("should return 'L' if given 'ALABAMA'", function() {
  assert.equal(firstNonRepeatedCharacter("ALABAMA"), "L")
});
it("should return 'T' if given 'sTreSS'", function() {
  assert.equal(firstNonRepeatedCharacter("sTreSS"), "T")
});

});
