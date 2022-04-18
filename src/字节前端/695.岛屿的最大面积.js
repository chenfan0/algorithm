// https://leetcode-cn.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */

function maxAreaOfIsland(grid) {
  const row = grid.length;
  const col = grid[0].length;

  function infect(x, y) {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] !== "1") {
      return 0;
    }
    grid[x][y] = '-1'
    const result =
      infect(x + 1, y) + infect(x - 1, y) + infect(x, y + 1) + infect(x, y - 1);
    
    return result + 1
  }
  let max = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        max = Math.max(infect(i, j), max) ;
      }
    }
  }
  return max
}
