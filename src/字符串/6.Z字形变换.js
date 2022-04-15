/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s;
  // 创建一个矩阵用于保存字符串
  const matrix = new Array(numRows).fill(0).map(() => []);
  let i = 0;
  let j = 0;
  let flag = "bottom";
  while (i < s.length) {
    matrix[j].push(s[i]);
    if (flag === "bottom") {
      j++;
      if (j === numRows - 1) {
        flag = "top";
      }
    } else {
      j--;
      if (j === 0) {
        flag = "bottom";
      }
    }
    i++;
  }
  let result = "";
  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i].join("");
  }
  return result;
}
