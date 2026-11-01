const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const discarded = new Set();
  const doubled = new Set();

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value === "--discard-prev") {
      if (i > 0) {
        discarded.add(i - 1);
      }
    } else if (value === "--discard-next") {
      if (i + 1 < arr.length) {
        discarded.add(i + 1);
      }
    } else if (value === "--double-prev") {
      if (i > 0) {
        doubled.add(i - 1);
      }
    } else if (value === "--double-next") {
      if (i + 1 < arr.length) {
        doubled.add(i + 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].startsWith("--")) {
      continue;
    }

    if (discarded.has(i)) {
      continue;
    }

    result.push(arr[i]);

    if (doubled.has(i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
