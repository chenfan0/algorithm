/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
  const arr = text.split(' ').filter(item => item !== '')
  const length = arr.length
  const getSpace = (len) => {
    let str = ''
    for (let i = 0; i < len; i++) {
      str += ' '
    }
    return str
  }
  let spaceCount = 0
  for (const s of text) {
    if (s === ' ') {
      spaceCount++
    }
  }
  if (length === 1) return arr[0] + getSpace(spaceCount)
  const midSpaceCount = getSpace(Math.floor(spaceCount / (length - 1)))
  const lastSpaceCount = getSpace(spaceCount % (length - 1))
  let result = ''
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      result += arr[i] + lastSpaceCount
    } else {
      result += arr[i] + midSpaceCount
    }
  }
  return result
};