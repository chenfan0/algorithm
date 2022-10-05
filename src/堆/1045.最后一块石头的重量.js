// https://leetcode.cn/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */

 const swap = (arr, x, y) => [arr[x], arr[y]] = [arr[y], arr[x]]

 class MaxHeap {
   constructor() {
     this.val = []
   }
 
   push(val) {
     this.val.push(val)
     this.siftUp(this.val.length - 1)
   }
 
   pop() {
     if (this.val.length === 0) return null
     if (this.val.length === 1) return this.val.pop()
     const popval = this.val.pop()
     const result = this.val[0]
     this.val[0] = popval
     this.siftDown(0)
     return result
   }
 
 
   siftUp(index) {
     let parIndex = (index - 1) >> 1
     while(true) {
       const parVal = this.val[parIndex]
       const curVal = this.val[index]
       if (parVal < curVal) {
         swap(this.val, index, parIndex)
         index = parIndex
         parIndex = (index - 1) >> 1
       } else {
         break
       }
     }
   }
 
   siftDown(index) {
     let leftIndex = index * 2 + 1
     let rightIndex = leftIndex + 1
 
     while (true) {
       if (rightIndex < this.val.length) {
         const leftVal = this.val[leftIndex]
         const rightVal = this.val[rightIndex]
         const maxIndex = leftVal > rightVal ? leftIndex : rightIndex
         if (this.val[maxIndex] < this.val[index]) {
           break
         } else {
           swap(this.val, index, maxIndex)
           index = maxIndex
           leftIndex = index * 2 + 1
           rightIndex = leftIndex + 1
         }
       } else {
         if (leftIndex < this.val.length) {
           if (this.val[index] < this.val[leftIndex]) {
             swap(this.val, leftIndex, index)
           }
         }
         break
       }
     }
   }
 }
 
 var lastStoneWeight = function(stones) {
   const maxHeap = new MaxHeap()
   for (const stone of stones) {
     maxHeap.push(stone)
   }
   while (maxHeap.val.length >= 2) {
     const max = maxHeap.pop()
     const second = maxHeap.pop()
     const newVal = max - second
     if (newVal !== 0) {
       maxHeap.push(newVal)
     }
   }
   return maxHeap.val.length ? maxHeap.val[0] : 0
 };
 