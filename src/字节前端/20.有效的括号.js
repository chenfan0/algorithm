// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  // 如果当前的字符串为空字符串，返回true
  if (!s) return true;
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const leftDelimiters = ["(", "{", "["];
  // 如果一开始第一个字符为右括号类型，直接返回false
  if (!leftDelimiters.includes(s[0])) return false;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const delimiter = s[i];
    // 如果当前字符为左括号类型，直接推入栈中
    if (leftDelimiters.includes(delimiter)) {
      stack.push(delimiter);
    } else {
      // 如果当前字符为右括号类型，取出栈顶元素进行匹配
      // 如果不匹配直接返回false
      // 如果匹配则继续进行判断
      const leftDelimiter = stack.pop();
      if (map[delimiter] === leftDelimiter) {
        continue;
      } else {
        return false;
      }
    }
  }
  // 如果最后栈中还有元素，则返回false
  if (stack.length !== 0) return false
  return true;
}
