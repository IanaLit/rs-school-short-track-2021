/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const noSort = -1;
  const indexes = [];
  let indexEl = arr.indexOf(noSort);
  for (let i = 0; i < arr.length; i++) {
    if (indexEl >= 0) {
      indexes.push(indexEl);
      indexEl = arr.indexOf(noSort, indexEl + 1);
    }
  }

  for (let i = indexes.length - 1; i >= 0; i--) {
    arr.splice(indexes[i], 1);
  }
  arr.sort((a, b) => a - b);
  indexes.map((el) => arr.splice(el, 0, noSort));
  return arr;
}

module.exports = sortByHeight;
