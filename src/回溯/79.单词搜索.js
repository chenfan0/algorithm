/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  const visited = new Array(row)
    .fill(false)
    .map((_) => new Array(col).fill(false));

  const process = (x, y, index) => {
    if (
      x < 0 ||
      x >= row ||
      y < 0 ||
      y >= col ||
      visited[x][y] ||
      board[x][y] !== word[index]
    ) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }
    visited[x][y] = true
    const res =
      process(x - 1, y, index + 1) ||
      process(x + 1, y, index + 1) ||
      process(x, y + 1, index + 1) ||
      process(x, y - 1, index + 1);
    visited[x][y] = false
    return res
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (process(i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
};
