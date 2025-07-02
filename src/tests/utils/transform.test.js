import { describe, it } from "mocha";
import { expect } from "chai";

import { roundOff, fixDecimal } from "../../utils/transform.js";

describe("Test Transform Utilities", () => {
  describe("roundOff", () => {
    it("should round up to nearest 0.05 (1/20)", () => {
      expect(roundOff(1.01)).to.equal(1.05);
      expect(roundOff(1.02)).to.equal(1.05);
      expect(roundOff(1.05)).to.equal(1.05);
      expect(roundOff(0)).to.equal(0);
    });
  });

  describe("fixDecimal", () => {
    it("should format number to 2 decimal places", () => {
      expect(fixDecimal(1)).to.equal("1.00");
      expect(fixDecimal(1.2)).to.equal("1.20");
      expect(fixDecimal(1.234)).to.equal("1.23");
      expect(fixDecimal(1.235)).to.equal("1.24");
      expect(fixDecimal(0)).to.equal("0.00");
    });
  });
});
