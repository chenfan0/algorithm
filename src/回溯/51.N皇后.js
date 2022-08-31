// https://leetcode.cn/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const getStr = (index) => {
    let str = "";
    for (let i = 0; i < n; i++) {
      if (i === index) {
        str += "Q";
      } else {
        str += ".";
      }
    }
    return str;
  };

  const check = (res) => {
    const len = res.length;
    if (len <= 1) return true;
    const checkIndex = res[len - 1].indexOf("Q");
    for (let i = 0; i < len - 1; i++) {
      const colLimit = res[i].indexOf('Q')
      if (colLimit === checkIndex) {
        return false
      }
      if (Math.abs(checkIndex - colLimit) / Math.abs(len - 1 - i) === 1) {
        return false
      }
    }
    return true
  };

  function recurse(res) {
    if (!check(res)) {
      return;
    }

    if (res.length === n) {
      result.push([...res]);
      return;
    }
    for (let i = 0; i < n; i++) {
      res.push(getStr(i));
      recurse(res);
      res.pop();
    }
  }
  recurse([]);
  return result;
};
