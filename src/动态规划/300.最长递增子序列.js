// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 动态规划
function lengthOfLIS(nums) {
  let max = 1;
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 找出i之前，所有比i小的
        // 去这些比i小的dp中，最大的那一个+1 作为dp[i]的值
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    // 每次循环进行比较
    max = Math.max(dp[i], max);
  }
  return max;
}

// 贪心+二分
function lengthOfLIS(nums) {

  const arr = [nums[0]]
  let end = 0
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > arr[end]) {
      arr[++end] = num
    } else {
      let l = 0, r = end
      // 在arr数组中，找到大于arr[mid]的最小值的下标，然后进行替换
      // 也就是让arr数组递增的尽量慢
      // [1, 7, 8] 5
      // [1, 5, 8]
      while (l <= r) {
        const mid = (l + r) >> 1
        if (num > arr[mid]) {
          l = mid + 1
        } else if (num < arr[mid]) {
          r = mid - 1
        } else {
          l = mid
          break
        }
      }
      arr[l] = num
    }
  }
  return arr.length
}