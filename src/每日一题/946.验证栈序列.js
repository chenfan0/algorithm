// https://leetcode.cn/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  const peek = () => stack[stack.length - 1]
  let i = 0, j = 0

  while (i < pushed.length && j < popped.length) {
    if (peek() === popped[j]) {
      stack.pop()
      j++
    } else {
      stack.push(pushed[i++])
    }
  }
  while (j < popped.length) {
    if (peek() === popped[j]) {
      stack.pop()
      j++
    } else {
      return false
    }
  }
  return true
};
