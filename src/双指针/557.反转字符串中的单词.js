// https://leetcode.cn/problems/reverse-words-in-a-string-iii/
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  // 使用split
  const arr = s.split(' ')
  for (let i = 0; i < arr.length; i++) {
    const rawStr = arr[i]
    let str = ''
    for (let j = rawStr.length - 1; j >= 0; j--) {
      str += rawStr[j]
    }
    arr[i] = str
  }
  return arr.join(' ')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 双指针
  const getEndLimit = (position = 0) => {
    const index = s.indexOf(' ', position)
    return index === -1 ? s.length : index
  }

  let startLimit = 0
  let endLimit = getEndLimit()
  let result = ''
  while (startLimit < s.length) {
    for (let i = endLimit - 1; i >= startLimit; i--) {
      result += s[i]
    }
    startLimit = endLimit + 1
    endLimit = getEndLimit(startLimit)
    // 防止最后多出一个空格
    if (startLimit < s.length) {
      result += ' '
    }
  }

  return result
};
