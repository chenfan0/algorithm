// https://leetcode-cn.com/problems/climbing-stairs/
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

function climbStairs(n) {
  // 如果n = 1,2,3其中一个，直接返回
  if ([1, 2, 3].includes(n)) {
    return n
  }
  const arr = [2, 3]
  for (let i = 4; i < n; i++) {
    [arr[0], arr[1]] = [arr[1], arr[0]]
    arr[1] = arr[0] + arr[1]
  }

  return arr[0] + arr[1]
}