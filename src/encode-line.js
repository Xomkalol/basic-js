const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let resultString = "";
  let counter = 1;
  let currentLetter = str[0];

  for (let i = 0; i < str.length; i++) {
    if (currentLetter === str[i + 1]) {
      counter += 1;
    } else {
      if (counter > 1) {
        resultString += `${counter}${currentLetter}`;
      } else if (counter === 1) {
        resultString += `${currentLetter}`;
      }
      currentLetter = str[i + 1];
      counter = 1;
    }
  }
  return resultString;
}

module.exports = {
  encodeLine,
};
