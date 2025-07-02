import { fixDecimal, roundOff } from "../utils/transform.js";
import { validateKeyInArray } from "../utils/validation.js";
import constants from "./../constants/strings.js";

export class Compute {
  constructor(handler) {
    this.handler = handler;
  }
  retrieveItemDetails(item) {
    const details = item.split(" ");

    return {
      name: details.slice(0, details.length - 2).join(" "),
      price: parseFloat(details[details.length - 1]),
    };
  }

  isExempted(name) {
    name = name.toLowerCase();

    return (
      validateKeyInArray(name, constants.exemptedItems) &&
      !name.includes(constants.imported)
    );
  }

  computeTax(name, price) {
    let tax = 0.1 * price;

    if (name.includes(constants.imported)) {
      tax += 0.05 * tax;
    }

    return roundOff(tax);
  }

  computeTotal() {
    let output = {
      tax: 0,
      total: 0,
      items: [],
    };

    for (const item of this.handler.inputArray) {
      const { name, price } = this.retrieveItemDetails(item);

      if (this.isExempted(name)) {
        output.items.push(`${name}: ${price}`);
        output.total += price;
        continue;
      }

      let tax = this.computeTax(name, price);
      output.tax += tax;
      output.total += tax + price;
      output.items.push(`${name}: ${fixDecimal(price + tax)}`);
    }

    output.total = fixDecimal(output.total);
    output.tax = fixDecimal(output.tax);

    return this.handler.handleResult(output);
  }
}
