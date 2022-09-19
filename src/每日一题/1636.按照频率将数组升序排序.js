/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
  const map = {}
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const val = map[nums[i]] || 0
    map[nums[i]] = val + 1
  }
  const arr = Object.entries(map)
  arr.sort((x, y) => {
    if (x[1] - y[1] === 0) {
      return Number(y[0]) - Number(x[0])
    }
    return x[1] - y[1]
    
  })
  for (let i = 0; i < arr.length; i++) {
    const [val, time] = arr[i]
    for (let j = 0; j < time; j++) {
      result.push(val)
    }
  }
  return result
};