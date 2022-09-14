/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
  const n = arr.length
  arr.sort((x, y) => x - y)
  const deleteCount = n * 0.05;
  let result = 0
  for (let i = deleteCount; i < n - deleteCount; i++) {
    result += arr[i]
  }
  return result / (n - 2 * deleteCount)
};