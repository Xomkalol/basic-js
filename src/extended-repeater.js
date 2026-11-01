const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? "+";
  const addition = options.addition === undefined ? "" : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? "|";

  let additionString = "";

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionString += String(addition);

    if (i < additionRepeatTimes - 1) {
      additionString += String(additionSeparator);
    }
  }

  let resultString = "";

  for (let i = 0; i < repeatTimes; i++) {
    resultString += String(str) + additionString;

    if (i < repeatTimes - 1) {
      resultString += String(separator);
    }
  }

  return resultString;
}

module.exports = {
  repeater,
};
