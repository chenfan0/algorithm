const { getData, swap } = require('../../utils')

const arr = getData(100)

// 用一个变量保存最小值或最大值
// 在遍历过程中，遇到更大或者更小的值时，修改该变量的值。
// 在一次遍历结束后，修改值
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：不稳定
// function selectSort(arr) {
//   const length = arr.length

//   for (let i = 0; i < length; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     // 如果minIndex与i不相同，则说明有比i更小的值，进行交换
//     if (minIndex !== i) {
//       swap(arr, minIndex, i)
//     }
//   }

//   return arr
// }

function selectSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(arr, i ,minIndex)
    }
  }

  return arr
}

// test
console.log(selectSort(arr));
