class PriorityQueue {
  constructor() {
    this.items = [];
  }
  // 这里优先级的数越大表示优先级越高
  enqueue(value, priority) {
    const element = { value, priority };
    if (this.isEmpty()) {
      this.items.push(element);
    } else {
      // 循环找到合适的位置
      // let isAdd = false;
      // for (let i = 0; i < this.size(); i++) {
      //   const el = this.items[i];
      //   if (el.priority < priority) {
      //     this.items.splice(i, 0, element);
      //     isAdd = true;
      //     break;
      //   }
      // }
      // if (!isAdd) {
      //   this.items.push(element);
      // }
      // 二分查找
      let l = 0, r = this.size() 
      let mid 

      while (l < r) {
        mid = Math.floor((l + r) / 2)
        const midItem = this.items[mid]

        if (midItem.priority < priority) {
          r = mid - 1
        } else if (midItem.priority > priority) {
          l = mid + 1
        } else {
          l = mid
          break
        }
      }
      for (; l < this.size(); l++) {
        if (this.items[l].priority !== priority) {
          break
        }
      }
      this.items.splice(l, 0, element)
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  dequeue() {
    return this.item.shift()
  }

  size() {
    return this.items.length;
  }

  toString() {
    return JSON.stringify(this.items);
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(3, 3);
priorityQueue.enqueue(4, 3);
priorityQueue.enqueue(2, 2);
priorityQueue.enqueue(1, 4);
priorityQueue.enqueue(4, 4);
priorityQueue.enqueue(25, 2);


console.log(priorityQueue.toString());
