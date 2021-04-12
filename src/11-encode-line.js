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
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const index = res.indexOf(str[i]);
    if (index > -1) {
      if (str[i] === str[i - 1]) {
        if (Number(res[index - 1] >= 2)) {
          res = `${res.substring(0, index - 1)}${Number(res[index - 1]) + 1}${str[i]}`;
        } else res = `${res.substring(0, index)}2${str[i]}`;
      } else res = `${res}${str[i]}`;
    } else res = `${res}${str[i]}`;
  }
  return res;
}
module.exports = encodeLine;
