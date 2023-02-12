// https://leetcode.cn/problems/largest-number/description/?languageTags=javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((x, y) => {
    const str1 = "" + x + y,
      str2 = "" + y + x;
    if (str1 > str2) {
      return -1;
    } else {
      return 1;
    }
  });
  if (nums[0] === 0) return "0";
  return nums.join("");
};
