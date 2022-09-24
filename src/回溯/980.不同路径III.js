// https://leetcode.cn/problems/unique-paths-iii/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let res = 0
  const process = (x, y, count) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === -1) {
      return 
    }
    // count - 1是因为走到终点的步数会比空格的个数多一步
    if (grid[x][y] === 2 && count - 1 !== nums) return
    if (grid[x][y] === 2 && count - 1 === nums) {
      res++
      return
    }
    grid[x][y] = -1
    process(x + 1, y, count + 1)
    process(x - 1, y, count + 1)
    process(x, y + 1, count + 1)
    process(x, y - 1, count + 1)
    grid[x][y] = 0
  }
  let inX = -1, inY = -1
  let nums = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        inX = i
        inY = j
      }
      if (grid[i][j] === 0) {
        nums++
      }
    }
  }

  process(inX, inY, 0)
  return res
  
};