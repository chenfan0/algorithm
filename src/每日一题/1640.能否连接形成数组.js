/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  let i = 0
  while (i < arr.length) {
    const target = arr[i]

    for (let j = 0; j < pieces.length; j++) {
      const piece = pieces[j]
      if (piece[0] === target) {
        for (let k = 1; k < piece.length; k++) {
          if (piece[k] === arr[i + 1]) {
            i++
            continue
          }
          return false
        }
        pieces.splice(j, 1)
      }
    }
    i++
  }

  if (pieces.length !== 0) {
      return false
  }
  return true
}

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  // 哈希表
  const map = new Map()
  pieces.forEach((piece, i) => map.set(piece[0], i))
  let i = 0
  while (i < arr.length) {
      const pieceIndex = map.get(arr[i])
      if (pieceIndex === undefined) return false
      const piece = pieces[pieceIndex]
      for (let j = 0; j < piece.length; j++) {
          if (arr[i] !== piece[j]) return false
          i++
      }
  }
  return true
}