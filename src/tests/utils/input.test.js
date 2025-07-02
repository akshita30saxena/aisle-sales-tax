import { describe, it, afterEach } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import { initializeReadline, readInput } from "../../utils/input.js";

describe("Readline Utilities", function () {
  let rlInterface;

  afterEach(() => {
    if (rlInterface) rlInterface.close();
  });

  describe("initializeReadline", function () {
    it("should return a readline.Interface object", function () {
      rlInterface = initializeReadline();

      expect(rlInterface).to.be.an("object");
      expect(rlInterface).to.have.property("question").that.is.a("function");
      expect(rlInterface).to.have.property("close").that.is.a("function");
    });
  });

  describe("readInput", function () {
    it("should resolve with mocked input string", async function () {
      rlInterface = initializeReadline();

      const stub = sinon
        .stub(rlInterface, "question")
        .callsFake((prompt, cb) => {
          cb("mocked user input");
        });

      const result = await readInput("Enter something: ", rlInterface);
      expect(result).to.equal("mocked user input");

      stub.restore();
    });
  });
});
