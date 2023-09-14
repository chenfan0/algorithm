/*
 * @lc app=leetcode.cn id=1222 lang=javascript
 *
 * [1222] 可以攻击国王的皇后
 */

// @lc code=start
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  const directions = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const isQueen = new Array(8).fill(null).map(() => new Array(8).fill(false));
  for (const [x, y] of queens) {
      isQueen[x][y] = true;
  }
  const ans = [];
  for (const [dx, dy] of directions) {
      let x = king[0] + dx;
      let y = king[1] + dy;
      while (0 <= x && x < 8 && 0 <= y && y < 8) {
          if (isQueen[x][y]) {
              ans.push([x, y]);
              break;
          }
          x += dx;
          y += dy;
      }
  }
  return ans;
};
// @lc code=end

