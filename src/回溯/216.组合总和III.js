// https://leetcode.cn/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const nums = new Array(9).fill(0).map((_, index) => index + 1);
  const result = [];

  const process = (index, sum, res = []) => {
    if (sum > n) return;
    if (res.length > k) return;
    if (res.length === k && sum === n) {
      result.push([...res]);
      return;
    }
    if (index === nums.length) return;
    process(index + 1, sum, res);
    const cur = nums[index];
    res.push(cur);
    process(index + 1, sum + cur, res);
    res.pop();
  };
  process(0, 0, []);
  return result;
};
