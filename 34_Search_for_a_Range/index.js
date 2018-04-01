/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var index = nums.findIndex(item => item === target);
  var last = index + 1;
  while (nums[last] === target) last++;
  return [index, last - 1];
};
