// https://leetcode-cn.com/problems/compare-version-numbers/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 1.2 < 1.10
function compareVersion(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const n = Math.min(arr1.length, arr2.length);

  function compare(v1, v2) {
    v1 = v1.replace(/^0*/, "");
    v2 = v2.replace(/^0*/, "");
    if (v1.length > v2.length) {
      return 1;
    }
    if (v1.length < v2.length) {
      return -1;
    }
    const n = v1.length;
    for (let i = 0; i < n; i++) {
      const str1 = Number(v1[i]);
      const str2 = Number(v2[i]);
      if (str1 > str2) {
        return 1;
      } else if (str1 < str2) {
        return -1;
      }
    }
    return 0;
  }
  let i = 0;
  for (; i < n; i++) {
    const result = compare(arr1[i], arr2[i]);
    if (result !== 0) {
      return result;
    }
  }
  if (arr1.length === n) {
    for (; i < arr2.length; i++) {
      const item = arr2[i].replace(/0/g, "");
      if (item !== "") {
        return -1;
      }
    }
    return 0;
  }
  if (arr2.length === n) {
    for (; i < arr1.length; i++) {
      const item = arr1[i].replace(/0/g, "");
      if (item !== "") {
        return 1;
      }
    }
    return 0;
  }
}
