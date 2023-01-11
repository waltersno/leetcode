// for small numbers

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let decimalSum = 0;
  let multiply = 1;

  for (let i = a.length - 1; i >= 0; i--) {
    decimalSum += +a[i] * multiply;
    multiply *= 2;
  }

  multiply = 1;

  for (let i = b.length - 1; i >= 0; i--) {
    decimalSum += +b[i] * multiply;
    multiply *= 2;
  }

  let finalString = '';
  while (decimalSum) {
    finalString = (decimalSum % 2) + finalString;
    decimalSum = ~~(decimalSum / 2);
  }

  return finalString;
};

// for big numbers
