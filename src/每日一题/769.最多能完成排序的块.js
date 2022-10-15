/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) { 
  let res = 0, max = 0
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max)
    // 如果当前 i 等于 max，说明前面到当前项是可以排成有序的
    if (i === max) {
      res++
    }
  }
  return res
}