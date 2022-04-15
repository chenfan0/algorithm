// https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (!s) return "";
  let newS = "";
  let maxStr = "";
  const n = s.length;
  // 将字符串填充上#字符
  // 防止abba 这种类型的字符串没有被比较
  for (let i = 0; i < n; i++) {
    if (i !== n - 1) {
      newS += "#" + s[i];
    } else {
      newS += "#" + s[i] + "#";
    }
  }
  const n1 = newS.length
  for (let i = 0; i < n1; i++) {
    let l = i, r = i
    while (l >= 0 && r < n1) {
      if (newS[l] === newS[r]) {
        if (maxStr.length < r - l + 1) {
          maxStr = newS.substring(l, r + 1)
        }
        l--
        r++
      } else {
        break
      }
    }
  }
  let result = ''
  for (let j = 0; j < maxStr.length; j++) {
    if (maxStr[j] !== '#') {
      result += maxStr[j]
    }
  }
  return result
}
