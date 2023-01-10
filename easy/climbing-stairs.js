// link: https://leetcode.com/problems/climbing-stairs/description/

const cache = {};

var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let firstValue;
  if (cache[n - 1]) {
    firstValue = cache[n - 1];
  } else {
    cache[n - 1] = climbStairs(n - 1);
    firstValue = cache[n - 1];
  }

  let secondValue;
  if (cache[n - 2]) {
    secondValue = cache[n - 2];
  } else {
    cache[n - 2] = climbStairs(n - 2);
    secondValue = cache[n - 2];
  }

  return firstValue + secondValue;
};
