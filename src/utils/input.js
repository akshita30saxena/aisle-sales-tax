import { createInterface } from "readline";

export function initializeReadline() {
  return createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

export function readInput(statement, rlInterface) {
  return new Promise((resolve) => {
    rlInterface.question(statement, (input) => {
      resolve(input);
    });
  });
}
