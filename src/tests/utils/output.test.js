import { describe, it, afterEach } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import chalk from "chalk";
import constants from "../../constants/strings.js";
import { logOptions, logMessage } from "../../utils/output.js";

describe("Logger Utilities", () => {
  let consoleLogStub, consoleErrorStub;

  afterEach(() => {
    if (consoleLogStub) consoleLogStub.restore();
    if (consoleErrorStub) consoleErrorStub.restore();
  });

  describe("logOptions", () => {
    it("should print all available options", () => {
      consoleLogStub = sinon.stub(console, "log");

      logOptions();

      const expectedOutput =
        `\n-------------------------------------------------------\n` +
        `Please input receipt item or choose from below options:\n` +
        `${constants.compute.code} - ${constants.compute.text}\n` +
        `${constants.reset.code} - ${constants.reset.text}\n` +
        `${constants.exit.code} - ${constants.exit.text}\n\n`;

      expect(consoleLogStub.calledOnce).to.be.true;
      expect(consoleLogStub.firstCall.args[0]).to.equal(expectedOutput);
    });
  });

  describe("logMessage", () => {
    it("should log an error message in red", () => {
      consoleErrorStub = sinon.stub(console, "error");
      const message = "Something went wrong";

      logMessage(message, constants.error);

      const expected = chalk.red(`\nERROR: ${message}\n`);
      expect(consoleErrorStub.calledOnce).to.be.true;
      expect(consoleErrorStub.firstCall.args[0]).to.equal(expected);
    });

    it("should log a success message in green", () => {
      consoleLogStub = sinon.stub(console, "log");
      const message = "Operation successful";

      logMessage(message, constants.success);

      const expected = chalk.green(`\n${message}`);
      expect(consoleLogStub.calledOnce).to.be.true;
      expect(consoleLogStub.firstCall.args[0]).to.equal(expected);
    });

    it("should log a generic message", () => {
      consoleLogStub = sinon.stub(console, "log");
      const message = "Just a note";

      logMessage(message);

      expect(consoleLogStub.calledOnce).to.be.true;
      expect(consoleLogStub.firstCall.args[0]).to.equal(`\n${message}`);
    });
  });
});
