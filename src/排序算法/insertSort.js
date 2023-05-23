const { getData, swap } = require('../../utils')

const arr = getData(100)
// 插入排序
// 先让下标0-1有序
// 然后让下标0-2有序
// 以此类推
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定
// function insertSort(arr) {
//   const length = arr.length

//   for (let i = 1; i < length; i++) {
//     let j = i
//     let temp = arr[j]
//     // 前面的值比当前的值还大，则将前面的值向右移动
//     while (j >= 0 && arr[j - 1] > temp) {
//       arr[j] = arr[j - 1]
//       j--
//     }
//     arr[j] = temp
//   }
//   return arr
// }

function insertSort(arr) {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    let j = i
    const temp = arr[j]

    while(j >= 1 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }

  return arr
}

console.log(insertSort(arr));


