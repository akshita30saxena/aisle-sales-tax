import { logMessage, logOptions } from "../utils/output.js";
import { Handler } from "./handler.js";
import constants from "./../constants/strings.js";
import { Compute } from "./compute.js";

export class Process {
  constructor() {
    this.handler = new Handler();
    this.compute = new Compute(this.handler);
  }

  async startProcessing() {
    let input;

    while (input !== constants.exit.text && input !== constants.exit.code) {
      logOptions();

      input = await this.handler.acceptInput();

      switch (input) {
        case constants.compute.code:
        case constants.compute.text:
          this.compute.computeTotal();
          break;
        case constants.reset.code:
        case constants.reset.text:
          this.handler.resetInputs();
          break;
        case constants.exit.code:
        case constants.exit.text:
          continue;
        default:
          this.handler.validateAndHandleInput(input);
      }
    }
  }
}
