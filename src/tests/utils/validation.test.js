import { describe, it } from "mocha";
import { expect } from "chai";
import constants from "../../constants/strings.js";
import { validateInput, validateKeyInArray } from "../../utils/validation.js";

describe("Validation Utilities", function () {
  describe("validateInput", function () {
    it("should return true for valid input", function () {
      const validInput = "1 book at 12.49";
      const result = validateInput(validInput);
      expect(result).to.be.true;
    });

    it("should return false for invalid input", function () {
      const invalidInput = "1 book at at 12.49";
      const result = validateInput(invalidInput);
      expect(result).to.be.false;
    });
  });

  describe("validateKeyInArray", function () {
    it("should return true if the key includes an item from the array", function () {
      const key = "1 book";
      const result = validateKeyInArray(key, constants.exemptedItems);
      expect(result).to.be.true;
    });

    it("should return false if the key does not include any item from the array", function () {
      const key = "orange";
      const result = validateKeyInArray(key, constants.exemptedItems);
      expect(result).to.be.false;
    });
  });
});
