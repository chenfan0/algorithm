class Stack {
  constructor() {
    this.items = []
  }
  // 在栈顶添加一个元素
  push(value) {
    this.items.push(value)
  }
  // 移除一个元素
  pop() {
    return this.items.pop()
  }
  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 返回栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 返回栈里元素的个数
  size() {
    return this.items.length
  }
  // 将栈中内容以字符串返回
  toString() {
    return this.items.join('')
  }
}

// test
const stack = new Stack()

stack.push('a')
console.log(stack.toString());
