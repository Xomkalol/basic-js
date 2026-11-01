const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberArray = String(n).split("");
  let biggestNumber = 0;
  for (let i = 0; i < numberArray.length; i++) {
    const testArray = [...numberArray];
    testArray.splice(i, 1);
    const sumNumber = testArray.join("");
    if (sumNumber > biggestNumber) {
      biggestNumber = parseInt(sumNumber);
    }
  }
  return biggestNumber;
}

module.exports = {
  deleteDigit,
};
