/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const maxString = s1.length >= s2.length ? s1 : s2;
  const secondArray = maxString === s1 ? s2.split('') : s1.split('');
  let acc = 0;
  maxString.split('').sort().forEach((curr) => {
    const secondIndex = secondArray.findIndex((el) => el === curr);
    if (secondIndex >= 0) {
      acc++;
      secondArray.splice(secondIndex, 1);
    }
  });
  return acc;
}

module.exports = getCommonCharacterCount;
