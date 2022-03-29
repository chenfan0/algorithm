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
  let len = 1,
    n = nums.length;
  const d = new Array(n + 1);
  d[len] = nums[0];

  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      let l = 1,
        r = len,
        pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      // 要找出 d 中比 nums[i]小的所有值中，最大的那一个下标。
      while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
}
