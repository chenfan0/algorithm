// https://leetcode.cn/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const arr = [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  function recurse(index, res = []) {
    if (res.length === k) {
      result.push([...res]);
      return;
    }
    if (index >= arr.length) return;
    recurse(index + 1, res);
    res.push(arr[index]);
    recurse(index + 1, res);
    res.pop();
  }
  recurse(0);
  return result;
};
