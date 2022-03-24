const { getData } = require('../utilis')

const arr = getData(100)

// merge函数的功能是对两个有序的数组合并成一个新的有序的数组
// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)
// 稳定性：稳定
// 存在栈溢出的风险
function merge(left, right) {
  const l1 = left.length
  const l2 = right.length
  let i = 0, j = 0
  const result = []
  while (i < l1 && j < l2) {
    if (left[i] > right[j]) {
      result.push(right[j++])
    } else {
      result.push(left[i++])
    }
  }
  while (i < l1) {
    result.push(left[i++])
  }

  while (j < l2) {
    result.push(right[j++])
  }
  return result
}
// 归并排序
// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)
// 稳定性：稳定
function mergeSort(arr) {
  // 如果数组的长度小于2直接返回原数组
  if (arr.length < 2) return arr

  const length = arr.length
  const mid = Math.floor(length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

console.log(mergeSort(arr));