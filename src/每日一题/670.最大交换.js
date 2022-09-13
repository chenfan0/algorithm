// https://leetcode.cn/problems/maximum-swap/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const str = num + "";
  const maxToMinArr = str.split("").sort((x, y) => y - x);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === maxToMinArr[i]) {
      continue;
    }
    // 在str中找到最大值的下标
    const index = str.lastIndexOf(maxToMinArr[i]);
    const result = str.split("");
    [result[index], result[i]] = [result[i], result[index]];
    return Number(result.join(""));
  }
  return num
};
