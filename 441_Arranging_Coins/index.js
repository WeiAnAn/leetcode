/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  var step = 0;
  var sum = 0;
  while (n >= sum) {
    step++;
    sum += step;
  }
  return step - 1;
};
