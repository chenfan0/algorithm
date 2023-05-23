const { getData, swap } = require("../../utils");

const arr = getData(100);

// function getPivot(arr, left, right) {
//   const mid = Math.floor((left + right) / 2);

//   if (arr[left] > arr[mid]) {
//     swap(arr, left, mid);
//   }
//   if (arr[left] > arr[right]) {
//     swap(arr, left, right);
//   }
//   if (arr[mid] > arr[right]) {
//     swap(arr, mid, right);
//   }
//   swap(arr, mid, right - 1);

//   return arr[right - 1];
// }

// function quick(arr, left, right) {
//   if (left >= right) return arr;
//   const pivot = getPivot(arr, left, right);
//   let i = left;
//   let j = right - 1;

//   while (i < j) {
//     while (arr[++i] < pivot) {}
//     while (arr[--j] > pivot) {}
//     if (i < j) {
//       swap(arr, i, j);
//     } 
//   }
//   swap(arr, i, right - 1);
//   quick(arr, left, i - 1);
//   quick(arr, i + 1, right);
//   return arr;
// }

// function quickSort(arr) {
//   return quick(arr, 0, arr.length - 1);
// }

function getPivot(arr, left, right) {
  const mid = (left + right) >> 1
  if (arr[left] > arr[mid]) {
    swap(arr, left, mid)
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right)
  }
  if (arr[mid] > arr[right]) {
    swap(arr, mid, right)
  }
  swap(arr, mid, right - 1)
  return arr[right - 1]
}

function quick(arr, left, right) {
  if (left >= right) return arr
  const pivot = getPivot(arr, left, right)
  let i = left
  let j = right - 1

  while (i < j) {
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}
    if (i < j) {
      swap(arr, i, j)
    }
  }
  swap(arr, i, right - 1)
  quick(arr, left, i - 1)
  quick(arr, i + 1, right)
  return arr
}

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1)
}

console.log(quickSort(arr));
