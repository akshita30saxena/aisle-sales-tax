export default {
  inputRegex: /^\d{1,}[\s\w]+(at)\s[+-]?([0-9]*[.])?[0-9]+$/,
  inputSplitBy: /\d+\s[\w\s]+?\s+at\s+[0-9]+(?:\.[0-9]{2})/g,
  splitBy: " at ",
  compute: {
    code: "1",
    text: "compute",
  },
  reset: {
    code: "2",
    text: "reset",
  },
  exit: {
    code: "3",
    text: "exit",
  },
  error: "error",
  success: "success",
  exemptedItems: ["chocolate", "pill", "book"],
  imported: "imported",
};
