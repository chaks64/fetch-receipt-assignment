const chai = require("chai");
const { calculatePoints } = require("../utils/calcPoints");
const { validateReceipt } = require("../utils/validateReceipt");
const { successReceipt } = require("./testData.api");
const assert = chai.assert;

let dependent = false;

describe("Utility Function Tests", () => {
  // Test case for validateReceipt()
  const receipt = validateReceipt(successReceipt);
  dependent = receipt;
  it("should check if receipt is valid or not", () => {
    assert.equal(receipt, true);
  });

  // Test case for calculatePoints()
  if (dependent) {
    console.log(dependent);
    it("should run only when receipt is valid and check the points calulation", () => {
      const points = calculatePoints(successReceipt);
      assert.equal(points, 31);
    });
  }
});
