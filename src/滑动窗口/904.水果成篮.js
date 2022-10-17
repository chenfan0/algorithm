// https://leetcode.cn/problems/fruit-into-baskets/description/

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
  const n = fruits.length;
  const map = new Map();

  let left = 0, res = 0, right = 0;
  while (right < n) {
    // 如果后续最大值也没有当前的res大，那么直接返回res即可
    if (n - left <=  res) return res
    // 对当前水果进行保存
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    // 由于只有两个篮子，所以当map.size大于2时，需要删除map中的一些数据
    while (map.size > 2) {
      // 对 left 对应的水果的值减一
      map.set(fruits[left], map.get(fruits[left]) - 1)
      // 如果 left 对应水果在map中已经是 0 了，那么就删除。
      // 如果没有删除，那么这里就会出现死循环，map.size就会一直大于2
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
};
