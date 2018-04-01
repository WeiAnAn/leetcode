/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var negative = false;
  if (x < 0) {
    negative = true;
    x = Math.sqrt(Math.pow(x, 2));
  }
  x = x + '';
  x = x.split('');
  x = x.reverse();

  x = x.reduce(function(prev, curr) {
    return prev * 10 + parseInt(curr);
  }, 0);
  if (x > Math.pow(2, 31)) {
    return 0;
  }
  if (negative) return x * -1;
  return x;
};
