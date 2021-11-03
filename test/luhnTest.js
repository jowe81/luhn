const assert = require('assert').strict;
const luhn = require('../luhn.js');

describe("luhn verification", () => {
  
  describe("helper functions", () => {

    describe("countDigits", () => {

      it("should return 5 for 23456", () => {
        assert.equal(luhn.countDigits(23456),5);
      });

      it("should return 1 for 2", () => {
        assert.equal(luhn.countDigits(2),1);
      });

    });

    describe("sumDigits", () => {

      it("should return 7 for 16", () => {
        assert.equal(luhn.sumDigits(16),7);
      });

      it("should return 20 for 23456", () => {
        assert.equal(luhn.sumDigits(23456),20);
      });

      it("should return 1 for 10", () => {
        assert.equal(luhn.sumDigits(10),1);
      });

      it("should return 0 for 0", () => {
        assert.equal(luhn.sumDigits(0),0);
      });

    });

  });

  it("should return true for 79927398713", () => {
    assert.equal(luhn.luhn(79927398713), true);
  });
  
});