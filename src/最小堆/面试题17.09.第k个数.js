// https://leetcode.cn/problems/get-kth-magic-number-lcci/

/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
  const fac = [3, 5, 7]
  const set = new Set()
  const minHeap = new MinHeap()
  minHeap.insert(1)
  set.add(1)
  let result = 0
  for (let i = 0; i < k; i++) {
    result = minHeap.pop()
    for (let j = 0; j < fac.length; j++) {
      const next = result * fac[j]
      if (!set.has(next)) {
        minHeap.insert(next)
        set.add(next)
      }
    }
  }
  return result
};

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]]
}

class MinHeap {
  constructor() {
    this.val = []
  }
  siftUp(index) {
    let parentIndex = (index - 1) >> 1
    while (this.val[parentIndex] > this.val[index] && parentIndex >= 0) {
      swap(this.val, parentIndex, index)
      index = parentIndex
      parentIndex = (parentIndex - 1) >> 1
    }
  }

  siftDown(index) {
    let parent = index
    let left = parent * 2 + 1
    let right = left + 1

    while (left < this.val.length) {
      if (right < this.val.length) {
        let leftVal = this.val[left]
        let rightVal = this.val[right]
        let minIndex = leftVal < rightVal ? left : right
        if (this.val[parent] > this.val[minIndex]) {
          swap(this.val, minIndex, parent)
          parent = minIndex
          left = parent * 2 + 1
          right = left + 1
        } else {
          break
        }
      } else {
        if (this.val[parent] > this.val[left]) {
          swap(this.val, parent, left)
        }
        break
      }
    }

  }

  insert(val) {
    this.val.push(val)
    this.siftUp(this.val.length - 1)
  }

  pop() {
    if (this.val.length === 1) {
      return this.val.pop()
    }
    const result = this.val[0]
    this.val[0] = this.val.pop()
    this.siftDown(0)
    return result
  }
}