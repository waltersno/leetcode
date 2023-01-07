// link: https://leetcode.com/problems/valid-parentheses/description/

const pairs = {
  '}': '{',
  ']': '[',
  ')': '(',
};

var isValid = function (input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const bracket = input[i];
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else if (stack.length && stack[stack.length - 1] === pairs[bracket]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
