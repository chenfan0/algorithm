// https://leetcode.cn/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((x, y) => x - y);
  const visited = new Array(candidates.length).fill(false);

  const process = (index, sum, res = []) => {
    if (sum > target) return;
    if (sum === target) {
      result.push([...res]);
      return;
    }
    if (index === candidates.length) return;
    process(index + 1, sum, res);
    if (
      !(
        index > 0 &&
        candidates[index] === candidates[index - 1] &&
        !visited[index - 1]
      )
    ) {
      const cur = candidates[index];
      res.push(cur);
      visited[index] = true;
      process(index + 1, sum + cur, res);
      res.pop();
      visited[index] = false;
    }
  };
  process(0, 0, []);
  return result;
};
