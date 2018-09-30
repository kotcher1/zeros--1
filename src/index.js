
module.exports = function getZerosCount(number) {
  let s = 1;
  let fives = Math.pow(5, s);
  let zeroes = 0;
  for (; number >= fives; fives = Math.pow(5, ++s)) {
    zeroes = zeroes + Math.trunc(number / fives);
  }
  return zeroes;
}
