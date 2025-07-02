import constants from "./../constants/strings.js";
import chalk from "chalk";

export function logOptions() {
  console.log(
    `\n-------------------------------------------------------\n` +
      `Please input receipt item or choose from below options:\n` +
      `${constants.compute.code} - ${constants.compute.text}\n` +
      `${constants.reset.code} - ${constants.reset.text}\n` +
      `${constants.exit.code} - ${constants.exit.text}\n\n`
  );
}

export function logMessage(msg, type) {
  switch (type) {
    case constants.error:
      console.error(chalk.red(`\nERROR: ${msg}\n`));
      break;
    case constants.success:
      console.log(chalk.green(`\n${msg}`));
      break;
    default:
      console.log(`\n${msg}`);
  }
}
