/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++])
  }


  // 处于重叠区间
  // 只要 interval[i][0] > newInterval[1] 则说明不重叠了
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0])
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    i++
  }
  res.push(newInterval)

  while (i < len) {
    res.push(intervals[i++])
  }

  return res
}
// @lc code=end

