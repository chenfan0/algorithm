const { getData, swap } = require('../utilis')

const arr = getData(100)

function heapInsert(heap, i) {
  let parentIndex = Math.floor((i - 1) / 2)
  // 只要当前的值比父节点的值还大，那么就交换这两个的值
  while (i > 0 && heap[i] > heap[parentIndex]) {
    swap(heap, i, parentIndex)
    i = parentIndex
    parentIndex = Math.floor((i - 1) / 2)
  }
}

function heapify(heap, size) {
  let index = 0
  let left = index * 2 + 1
  let right = left + 1

  while (left < size) {
    if (right < size) {
      const maxIndex = heap[left] > heap[right] ? left : right
      if (heap[index] < heap[maxIndex]) {
        swap(heap, index, maxIndex)
        index = maxIndex
        left = index * 2 + 1
        right = left + 1
      } else {
        return
      }
    } else {
      if (heap[index] < heap[left]) {
        swap(heap, index, left)
      } else {
        return
      }
    }
  }
}

// 堆排序:首先将数组变成一个大根堆，然后将大根堆的根节点和最后一个节点交换。
// 接着将堆重新变成大根堆，继续上面的操作。
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)
// 稳定性：不稳定
function heapSort(arr) {
  let heapSize = arr.length

  // 先将数组变成一个大根堆
  for (let i = 0; i < heapSize; i++) {
    heapInsert(arr, i)
  }

  // 将根节点的值和最后的值交换。
  // 然后在将这个堆变成大根堆
  while (heapSize > 0) {
    swap(arr, 0, heapSize - 1)
    heapSize--
    heapify(arr, heapSize)
  }

  return arr
} 

console.log(heapSort(arr));