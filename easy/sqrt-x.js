/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (input) {
  if (input === 0) {
    return 0;
  }

  if (input === 2) {
    return 1;
  }

  let nearest = input;
  let diff = input;

  for (let i = input; i > 0; i--) {
    if (i ** 2 === input) {
      return i;
    }

    if ((i ** 2 > input ? i ** 2 - input : input - i ** 2) < diff) {
      nearest = i;
      diff = i ** 2 > input ? i ** 2 - input : input - i ** 2;
    }
  }

  if (nearest ** 2 > input) {
    return nearest - 1;
  }

  if (nearest ** 2 < input) {
    return input - nearest ** 2 < input - (nearest - 1) ** 2
      ? nearest
      : nearest - 1;
  }

  return nearest;
};
