/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) { 
  const result = []
  // 排序
  nums.sort((x, y) => x - y)
  function recurse(index, preChose, res = []) {
    if (index >= nums.length) {
      result.push([...res])
      return
    }
    if (nums[index] === nums[index - 1] && !preChose) {
      // 当前值等于上一个值，同时还没有选择上一个值,则不能选择当前值，否则会出现重复
      recurse(index + 1, false, res)
    } else {
      recurse(index + 1, false, res)
      res.push(nums[index])
      recurse(index + 1, true, res)
      res.pop()
    }
  }

  recurse(0, true)
  return result
}