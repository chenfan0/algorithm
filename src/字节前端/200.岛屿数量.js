/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslands(grid) {
  const row = grid.length
  const col = grid[0].length
  let res = 0
  function infect(i, j) {
    // 感染函数将访问过的陆地值设置为'-1'
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== '1') {
      return
    }
    grid[i][j] = '-1'
    infect(i - 1, j)
    infect(i + 1, j)
    infect(i, j - 1)
    infect(i, j + 1)
    return 
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        // 如果当前值为'1'，则表示陆地，res++
        // 并且调用感染函数
        infect(i, j)
        res++
      }
    }
  }
  return res
}