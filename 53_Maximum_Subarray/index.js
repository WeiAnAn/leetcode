/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var sum = 0,
    ans = nums[0];
  nums.forEach(num => {
    sum += num;
    ans = Math.max(sum, ans);
    sum = sum > 0 ? sum : 0;
  });

  return ans;
};
