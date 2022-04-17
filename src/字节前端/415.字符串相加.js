/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let curry = 0;
  let result = "";

  // 从后往前进行相加
  while (i >= 0 && j >= 0) {
    const str1 = num1[i--];
    const str2 = num2[j--];
    const curSum = Number(str1) + Number(str2) + curry;
    const curResult = curSum % 10;
    result = curResult + result;
    curry = Math.floor(curSum / 10);
  }
  while (i >= 0) {
    const str1 = num1[i--];
    const curSum = Number(str1) + curry;
    const curResult = curSum % 10;
    result = curResult + result;
    curry = Math.floor(curSum / 10);
  }
  while (j >= 0) {
    const str2 = num2[j--];
    const curSum = Number(str2) + curry;
    const curResult = curSum % 10;
    result = curResult + result;
    curry = Math.floor(curSum / 10);
  }
  if (curry) {
    result = curry + result;
  }
  return result;
}
