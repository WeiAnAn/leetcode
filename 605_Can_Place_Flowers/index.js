/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let cursor = 0;
  while (cursor < flowerbed.length) {
    if (n == 0) return true;
    if (flowerbed[cursor] == 1) {
      cursor += 2;
      continue;
    }
    if (flowerbed[cursor + 1] == 1) {
      cursor += 3;
      continue;
    }
    cursor += 2;
    n--;
  }
  if (n == 0) return true;
  return false;
};
