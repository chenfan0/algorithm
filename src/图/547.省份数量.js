// https://leetcode.cn/problems/number-of-provinces/description/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const n = isConnected.length
  let res = 0
  const visited = new Set()
  const dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j)
        dfs(j)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      visited.add(i)
      dfs(i)
      res++
    }
  }
  return res
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  // bfs
  const n = isConnected.length
  let res = 0
  const visited = new Set()

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      const queue = [i]
      while (queue.length) {
        const j = queue.shift()
        visited.add(j)
        for (let k = 0; k < n; k++) {
          if (isConnected[j][k] === 1 && !visited.has(k)) {
            queue.push(k)
          }
        }
      }
      res++
    }
  }

  return res
}