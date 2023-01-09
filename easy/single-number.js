// link: https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  let returnVal = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === returnVal) {
      continue;
    } else if (
      !nums.slice(i).includes(returnVal) &&
      !nums.slice(0, i - 1).includes(returnVal)
    ) {
      return returnVal;
    } else {
      returnVal = nums[i];
    }
  }

  return returnVal;
};
