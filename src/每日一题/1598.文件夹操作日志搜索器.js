// https://leetcode.cn/problems/crawler-log-folder/

/**
 * @param {string[]} logs
 * @return {number}
 */
// 用栈
var minOperations = function (logs) {
  const stack = [];

  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") {
      stack.pop();
      continue;
    }
    stack.push(log);
  }
  return stack.length;
};

var minOperations = function (logs) {
  let depth = 0;
  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") {
      depth = depth === 0 ? 0 : depth - 1;
      continue;
    }
    depth += 1;
  }
  return depth;
};
