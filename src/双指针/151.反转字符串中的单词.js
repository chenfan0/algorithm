// https://leetcode.cn/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(' ').filter(str => str !== '').reverse().join(' ')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim()
  const n = s.length
  let start = n, end = n
  let result = ''
  while (end >= 0) {
    if (s[end] === ' ') {
      end--
      continue
    }

    // 下面的两个if顺序不能调换，因为如果调换了
    // 当单词会一个字符的情况会出现截取错误的情况

    // 单词的最后一个字符
    if (s[end + 1] === ' ') {
      // 这里需要 +1, 因为slice的时候end参数是不会进行截取的
      start = end + 1
    }
    
    // 单词的第一个字符
    if (s[end - 1] === ' ') {
      result += s.slice(end, start) + ' '
    }

    // 如果end === 0 需要将截取字符，不然会导致最后结果少了第一个单词
    if (end === 0) {
      result += s.slice(end, start)
    }

    end--
  }

  return result
};
