/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {
  const n = code.length

  if (k === 0) {
    return code.map(_ => 0)
  }
  let result = []
  if (k > 0) {
    for (let i = 0; i < n; i++) {
      let sum = 0
      for (let j = 1; j <= k; j++) {
        const index = (i + j) % (n)
        sum += code[index]
      }
      result[i] = sum
    }
  }
  if (k < 0) {
    for (let i = 0; i < n; i++) {
      let sum = 0
      for (let j = 1; j <= -k; j++) {
        const index = (i - j) < 0 ? i - j + n : i - j
        sum += code[index]
      }
      result[i] = sum
    }
  }


  return result
};