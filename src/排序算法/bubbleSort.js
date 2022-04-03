const { getData, swap } = require('../utilis')

const arr = getData(100)

// 比较相邻元素，如果前一个比后一个大，则交换
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定
function bubbleSort(arr) {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr
}

// test
console.log(bubbleSort(arr));
