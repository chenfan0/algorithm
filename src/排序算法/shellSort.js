const { getData } = require('../../utils')

const arr = getData(100)

// 插入排序当右边有一个比较小的值时，把该值移动到正确的位置需要移动很多位置
// 希尔排序在插入排序的基础上，给排序的数组进行分间隔
// 间隔一开始为数组长度的一半，然后每次减少一半，直到间隔为1时，也就是插入排序了。
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)
// 稳定性：不稳定
// function shellSort(arr) {
//   const length = arr.length
//   let gap = Math.floor(length / 2)

//   while (gap >= 1) {
//     for (let i = gap; i < length; i++) {
//       let j = i
//       const temp = arr[j]
  
//       while (j >= gap && arr[j - gap] > temp) {
//         arr[j] = arr[j - gap]
//         j -= gap
//       }
  
//       arr[j] = temp
//     }
//     gap = Math.floor(gap / 2)
//   }

//   return arr
// }

function shellSort(arr) {
  const len = arr.length
  let gap = len >> 1

  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      let j = i
      let temp = arr[j]

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap]
        j -= gap
      }

      arr[j] = temp
    }
    gap >>= 1
  }
  return arr
}

console.log(shellSort(arr));