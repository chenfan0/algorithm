// https://leetcode.cn/problems/score-of-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
  const stack = [0]

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(0)
    } else {
      const prev = stack.pop()
      stack.push(stack.pop() + Math.max(prev * 2, 1))
    }
  }
  return stack.pop()
};