// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

function CQueue() {
  this.stack1 = []
  this.stack2 = []
}

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
}

CQueue.prototype.deleteHead = function () {
  // 当要进行删除时，判断stack2是否有数据，如果没有，将stack1中的数据全部保存到stack2中
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  const result = this.stack2.pop()
  return result === undefined ? -1 : result
}



