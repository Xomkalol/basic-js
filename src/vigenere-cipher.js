const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  process(message, key, sign) {
    if (
      typeof message !== "string" ||
      typeof key !== "string" ||
      !message ||
      !key
    ) {
      throw new Error("Incorrect arguments!");
    }

    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    const result = message
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char < "A" || char > "Z") {
          return char;
        }

        const textCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
        keyIndex++;

        return String.fromCharCode(
          ((textCode + sign * keyCode + 26) % 26) + 65,
        );
      })
      .join("");

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
