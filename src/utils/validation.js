import constants from "./../constants/strings.js";

export function validateInput(input) {
  return (
    constants.inputRegex.test(input) && (input.match(/\sat/g) || []).length == 1
  );
}

export function validateKeyInArray(key, items) {
  for (const item of items) {
    if (key.includes(item)) {
      return true;
    }
  }

  return false;
}
