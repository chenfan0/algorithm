class Queue {
  constructor() {
    this.items = []
  }
  // 向队列尾部添加一个或者多个新的项
  enqueue(...values) {
    this.items.push(...values)
  }
  
  // 移除队列的第一个元素
  dequeue() {
    return this.items.shift()
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join('')
  }
}