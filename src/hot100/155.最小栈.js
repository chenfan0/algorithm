// https://leetcode.cn/problems/min-stack/description/

var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  const min = this.getMin() ?? Infinity
  if (val <= min) {
    this.minStack.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const pop = this.stack.pop()
  const min = this.getMin()
  if (pop === min) {
    this.minStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */