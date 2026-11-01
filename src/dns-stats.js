const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObject = {};
  domains.forEach((site) => {
    const siteArrayReversed = site.split(".").reverse();
    let stringToPush = "";
    for (let i = 0; i < siteArrayReversed.length; i++) {
      stringToPush += `.${siteArrayReversed[i]}`;
      if (resultObject[stringToPush]) {
        resultObject[stringToPush] += 1;
      } else {
        resultObject[stringToPush] = 1;
      }
    }
  });
  return resultObject;
}

module.exports = {
  getDNSStats,
};
