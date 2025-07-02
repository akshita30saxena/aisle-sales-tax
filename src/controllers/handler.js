import { initializeReadline, readInput } from "../utils/input.js";
import { logMessage } from "../utils/output.js";
import { validateInput } from "../utils/validation.js";
import constants from "./../constants/strings.js";

export class Handler {
  constructor() {
    this.inputArray = [];
    this.rlInterface = initializeReadline();
  }

  async acceptInput() {
    return await readInput("Your Input: ", this.rlInterface);
  }

  resetInputs() {
    this.inputArray = [];
    logMessage("Inputs have been reset, Starting Again");
  }

  validateAndHandleInput(input) {
    logMessage("Receipt Detail received, validating...");
    input = input.trim();

    if (validateInput(input)) {
      this.inputArray.push(input);
      logMessage(
        `Receipt Items: \n${this.inputArray.join("\n")}`,
        constants.success
      );
      return;
    }

    logMessage("Invalid Receipt Item, Please try again.", constants.error);
  }

  handleResult(output) {
    let result = "Please find the Total Price & Tax breakup below:\n";

    for (const item of output.items) {
      result += `${item}\n`;
    }

    result += `\nSales Tax: ${output.tax}\n`;
    result += `Total: ${output.total}`;

    logMessage(result, constants.success);
    this.inputArray = [];
  }
}
