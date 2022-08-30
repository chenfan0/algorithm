/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) { 
  const pathNames = path.split('/').filter(name => name !== '')
  const stack = []

  for (const name of pathNames) {
    // 如果是..说明要返回上一层
    if (name === '..') {
      stack.pop()
    } else if (name !== '.') {
      // 不是 . 则进行压栈操作
      // 如果是 . 则不进行任何操作
      stack.push(name)
    }
  }
  return '/' + stack.join('/')
}