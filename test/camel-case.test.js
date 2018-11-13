const assert = require("chai").assert;
const camelCase = require("../src/camel-case");

describe("camelCase", function() {
  it("output should be a typeof string", function() {
    assert.typeOf(camelCase('this is a string'), 'string')
});
  it("should return 'thisIsAString' if given 'this is a string'", function() {
       assert.equal(camelCase('this is a string'), 'thisIsAString')
  });
  it("should return 'vacationRentalsByOwner' if given 'vacation rentals by owner'", function() {
    assert.equal(camelCase('vacation rentals by owner'), 'vacationRentalsByOwner')
});
  it("should return 'supercalifragalisticexpialidocious' if given 'supercalifragalisticexpialidocious'", function() {
    assert.equal(camelCase('supercalifragalisticexpialidocious'), 'supercalifragalisticexpialidocious')
});

});
