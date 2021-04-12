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
  const res = {};
  domains.forEach((domain) => {
    const domainArray = domain.split('.').reverse();
    let prev = '';
    domainArray.forEach((el) => {
      if (Object.keys(res).length > 0) {
        const curr = `${prev}.${el}`;
        if (Object.keys(res).find((key) => key === curr) !== undefined) {
          res[`${curr}`] += 1;
          prev = curr;
        } else {
          res[`${curr}`] = 1;
          prev = curr;
        }
        return res;
      }
      res[`.${el}`] = 1;
      prev = `.${el}`;
      return res;
    });
  });
  return res;
}

module.exports = getDNSStats;
