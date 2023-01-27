/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // 可以先排序再进行查找，但是就无法做到 On
  const set = new Set([...nums])
  let maxLength = 0

  for (const num of set) {
    // 如果前一个没有，在进行查找
    // 跳过无用的查找
    // eg 1 2 3 4 
    // 如果没有进行跳过，在 1 的时候会查找 2 3 4
    //                在 2 的时候会查找 3 4 
    // 在当前值减1存在的情况下，查找当前值是没有必要的，直接跳过就可以
    if (!set.has(num - 1)) {
      let curNum = num
      let curLen = 1

      while (set.has(curNum + 1)) {
        curLen++
        curNum++
      }
      maxLength = Math.max(maxLength, curLen)
    }
  }
  return maxLength
}