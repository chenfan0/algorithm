// https://leetcode.cn/problems/swap-adjacent-in-lr-string/

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
 var canTransform = function(start, end) {
  // 替换规则 XL -> LX  RX -> XR
  // XL->LX 相当于把L左移，X右移
  // RX->XR 相当于把R右移，X左移
  // 如果start和end长度都不同，直接返回false
  // 根据替换规则， start中的 L 下标会 >= end中的 L 下标，start中的 R 下标会 <= end中的下标
  if (start.length !== end.length) return false
  const n = start.length

  let i = 0, j = 0

  while (i < n && j < n) {
    if (start[i] === 'X') {
      i++
      continue
    }
    if (end[j] === 'X') {
      j++
      continue
    }
    if (start[i] !== end[j]) {
      return false
    }
    if (start[i] === 'L' && i < j || start[i] === 'R' && i > j) {
      return false
    }
    i++
    j++
  }
  while (i < n) {
    if (start[i] !== 'X') {
      return false
    }
    i++
  }
  while (j < n) {
    if (end[j] !== 'X') {
      return false
    }
    j++
  }
  return true
};