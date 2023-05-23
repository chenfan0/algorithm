const { getData } = require('../../utils')

const arr = getData(100)

// merge函数的功能是对两个有序的数组合并成一个新的有序的数组
// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)
// 稳定性：稳定
// 存在栈溢出的风险
// function merge(left, right) {
//   const l1 = left.length
//   const l2 = right.length
//   let i = 0, j = 0
//   const result = []
//   while (i < l1 && j < l2) {
//     if (left[i] > right[j]) {
//       result.push(right[j++])
//     } else {
//       result.push(left[i++])
//     }
//   }
//   while (i < l1) {
//     result.push(left[i++])
//   }

//   while (j < l2) {
//     result.push(right[j++])
//   }
//   return result
// }
// // 归并排序
// // 时间复杂度：O(nlogn)
// // 空间复杂度：O(n)
// // 稳定性：稳定
// function mergeSort(arr) {
//   // 如果数组的长度小于2直接返回原数组
//   if (arr.length < 2) return arr

//   const length = arr.length
//   const mid = Math.floor(length / 2)
//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid)

//   return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

function merge(left, right) {
  const l1 = left.length
  const l2 = right.length
  const result = []
  let i = 0, j = 0
  while (i < l1 && j < l2) {
    if (left[i] > right[j]) {
      result.push(right[j++])
    } else {
      result.push(left[i++])
    }
  }
  if (i < l1) {
    result.push(...left.slice(i))
  }
  if (j < l2) {
    result.push(...right.slice(j))
  }
  return result
}

function mergeSort(arr) {
  const len = arr.length
  if (len < 2) return arr
  const mid = len >> 1
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr));