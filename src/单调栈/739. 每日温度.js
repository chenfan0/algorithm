// https://leetcode.cn/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 一般遇到找左边或者右边第一个比当前元素大或者小的题目时，就可以使用单调栈
 var dailyTemperatures = function(temperatures) {
  const stack = []
  const res = []

  for (let i = temperatures.length - 1; i >= 0; i--) {
    const tem = temperatures[i]

    while (stack.length && tem >= stack[stack.length - 1].val) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1].index - i : 0
    stack.push({val: tem, index: i})
  }

  return res
};