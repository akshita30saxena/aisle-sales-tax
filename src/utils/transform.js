export function roundOff(num) {
  return Math.ceil(num * 20) / 20;
}

export function fixDecimal(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
