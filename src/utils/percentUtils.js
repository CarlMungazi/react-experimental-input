export function getWidthAsPercentOfTotalWidth(percent, width) {
  return parseInt(width * (percent / 100), 10);
}