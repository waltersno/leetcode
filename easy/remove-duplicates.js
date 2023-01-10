/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let changeIndex = 1;
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > current) {
      nums[changeIndex] = nums[i];
      changeIndex += 1;
      current = nums[i];
    }
  }

  return changeIndex;
};
