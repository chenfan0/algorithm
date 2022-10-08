/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 排序 + 二分
 var advantageCount = function(nums1, nums2) {
  nums1.sort((x, y) => x - y)
  const res = []
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]

    let start = 0, end = nums1.length - 1
    while (start <= end) {
      const mid = (start + end) >> 1
      if (nums1[mid] > num) {
        if (nums1[mid - 1] > num) {
          end = mid - 1
        } else {
          start = mid
          break
        }
      } else if (nums1[mid] < num) {
        start = mid + 1
      } else {
        if (nums1[mid + 1] > num) {
          start = mid + 1
          break
        } else {
          start = mid + 1
        }
      }
    }
    if (start === nums1.length) {
      res.push(nums1.shift())
    } else {
      res.push(nums1[start])
      nums1.splice(start, 1)
    }
  }
  return res
}

var advantageCount = function(nums1, nums2) {
  const n = nums1.length
  // 用于记录nums2排序后的下标
  const indexMap = new Array(n).fill(0).map((_, index) => index)
  nums1.sort((x, y) => x - y)
  indexMap.sort((x, y) => nums2[x] - nums2[y])
  let left = 0, right = n - 1
  const res = []
  for (let i = 0; i < n; i++) {
    if (nums1[i] > nums2[indexMap[left]]) {
      res[indexMap[left++]] = nums1[i]
    } else {
      res[indexMap[right--]] = nums1[i]
    } 
  }
  return res
}