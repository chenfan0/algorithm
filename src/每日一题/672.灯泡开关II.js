// https://leetcode.cn/problems/bulb-switcher-ii/

/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
 var flipLights = function(n, press) {
  if (press == 0) return 1
  if (n == 1) return 2
  else if (n == 2) return press == 1 ? 3 : 4;
  else return press == 1 ? 4 : press == 2 ? 7 : 8;
};