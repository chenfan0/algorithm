function getRandom(end) {
  return Math.floor(Math.random() * end)
}

 function getData(time) {
  const arr = []
  for (let i = 0; i < time; i++) {
    arr.push(getRandom(time))
  }
  return arr
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]]
}

module.exports = {
  getData,
  swap
}