/*
 * @lc app=leetcode.cn id=1654 lang=javascript
 *
 * [1654] 到家的最少跳跃次数
 */

// @lc code=start
/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
  if (x === 0) return 0
  const forbiddenSet = new Set(forbidden)
  let minStep = Number.MAX_SAFE_INTEGER

  function dfs(curVal, step, canBack) {

    if (curVal === x) {
      minStep = Math.min(minStep, step)
      return
    }
    if (step >= minStep) return


    const forward = curVal + a
    const backward = curVal - b

    if (forward <= 6000 && !forbiddenSet.has(forward)) {
      forbiddenSet.add(forward) // 添加向前访问 forward 这个点
      dfs(forward, step + 1, true)
    }

    if (backward >= 0 && canBack && !forbiddenSet.has(backward)) {
      // forbiddenSet.add(backward) 这里不能添加向后访问的点位紧张访问
      // 因为向后推到一个点，他下一步只能往前，无法往后，如果添加了，那么就会忽略backward这个点向后的可能性
      dfs(backward, step + 1, false)
    }

  }

  dfs(0, 0, false)
  return minStep === Number.MAX_SAFE_INTEGER ? -1 : minStep


};
// @lc code=end

