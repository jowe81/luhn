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

    describe("calculateLuhnCheckDigit", () => {

      it("should return 3 for 7992739871", () => {
        assert.equal(luhn.calculateLuhnCheckDigit(7992739871), 3);
      });

      it("should return 4 for 7389176", () => {
        assert.equal(luhn.calculateLuhnCheckDigit(7389176), 4);
      });

      it("should return 6 for 255138981", () => {
        assert.equal(luhn.calculateLuhnCheckDigit(255138981), 6);
      });
      
    });

  });

  it("should return true for 79927398713", () => {
    assert.equal(luhn.check(79927398713), true);
  });

  it("should return false for 79927398813", () => {
    assert.equal(luhn.check(79927398813), false);
  });

  it("should return true for 73891764", () => {
    assert.equal(luhn.check(73891764), true);
  });

  it("should return false for 73981764", () => {
    assert.equal(luhn.check(73981764), false);
  });

  it("should return true for 2551389816", () => {
    assert.equal(luhn.check(2551389816), true);
  });

  it("should return false for 2551389876", () => {
    assert.equal(luhn.check(2551389876), false);
  });

});