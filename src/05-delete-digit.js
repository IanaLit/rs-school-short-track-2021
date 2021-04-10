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
class DeleteDigit {
  constructor(i, v) {
    this.index = i;
    this.value = v;
  }
}
function deleteDigit(n) {
  const compareValues = [];
  const digitArray = n.toString().split('');
  digitArray.map((_, i) => {
    let tempArray = [];
    tempArray = tempArray.concat(digitArray);
    tempArray.splice(i, 1);
    const tempValue = Number(tempArray.join(''));
    const tempObject = new DeleteDigit(i, tempValue);
    compareValues.push(tempObject);
    return compareValues;
  });
  let max = compareValues[0].value;
  compareValues.forEach((el) => {
    if (max <= el.value) {
      max = el.value;
    }
    return max;
  });
  return max;
}

module.exports = deleteDigit;
