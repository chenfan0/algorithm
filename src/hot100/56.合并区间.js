/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return []
  if (intervals.length === 1) return intervals
  const res = []
  intervals.sort((x, y) => x[0] - y[0])
  let start = intervals[0][0]
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const _start = intervals[i][0]
    const _end = intervals[i][1]

    if (_start > end) {
      // [1, 2] [4, 5]
      res.push([start, end])
      start = _start
      end = _end
    } else if (_start === end) {
      //  [1, 2] [2, 3]
      end = _end
    } else if (_start < end) {
      if (_end >= end) {
        // [1, 4] [2, 5]
        end = _end
      }
      //  [1, 4] [2, 3]
    }

    if (i === intervals.length - 1) {
      res.push([start, end])
    }
    
  }

  return res

};
// @lc code=end

