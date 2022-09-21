/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
 var kSimilarity = function(s1, s2) {
  if (s1 === s2) return 0
  const arr = s2.split('')
  let res = s1.length
  const dfs = (index, arr, count) => {
    if (count >= res) return
    if (index === s1.length) {
      res = Math.min(res, count)
      return
    }
    if (s1[index] === arr[index]) {
      return dfs(index + 1, arr, count)
    }
    const item = s1[index]
    for (let i = index + 1; i < s1.length; i++) {
      if (arr[i] === item) {
        [arr[index], arr[i]] = [arr[i], arr[index]]
        dfs(index + 1, arr, count + 1);
        [arr[index], arr[i]] = [arr[i], arr[index]]
      }
    }
  }
  dfs(0, arr, 0)
  return res
};