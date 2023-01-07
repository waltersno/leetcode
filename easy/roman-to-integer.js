// link: https://leetcode.com/problems/roman-to-integer/description/

const romanObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (romanObj[input[i]] < romanObj[input[i + 1]]) {
      count -= romanObj[input[i]];
    } else {
      const data = romanObj[input[i]];
      count += data;
    }
  }

  return count;
};
