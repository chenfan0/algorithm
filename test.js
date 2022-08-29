// /*
// 标题
// 并发请求限制

// 题目描述
// 【背景】
// 一般浏览器会限制并发请求数，微信小程序之前也限制过最多请求不超过10个。
// 现在，让我们来实现一下这个功能。
// 【问题描述】
// 实现这样一个函数scheduler，函数入参为并发最大次数。
// 如下最终输出顺序： 2、3、 1、 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
// */
// // -----------------mock一些请求
// const request1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });

// const request2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 500);
//   });
// const request3 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 300);
//   });
// const request4 = () =>
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(4);
//   }, 400);
// });

// // -----------------最多并发2个请求
// function scheduler(max) {
//   let requestTime = 0
//   const tasks = []
//   return function addRequest(request) {
//     return new Promise((resolve, reject) => {
//       if (requestTime < max) {
//         requestTime++
//         request().then((res) => {
//           requestTime--
//           resolve(res)
//           if (tasks.length > 0) {
//             const task = tasks.shift()
//             addRequest(task.request).then(res => {
//               task.resolve(res)
//             })
//           }
//         })
//       } else {
//         tasks.push({
//           request,
//           resolve
//         })
//       }
//     })
//   }

// }

// const addRequest = scheduler(2);
// addRequest(request1).then((res) => {
//   console.log(res);
// });
// addRequest(request2).then((res) => {
//   console.log(res);
// });
// addRequest(request3).then((res) => {
//   console.log(res);
// });
// addRequest(request4).then((res) => {
//   console.log(res);
// });

// function singlePipe(promiseFn) {
//   // TODO
//   let isRunning = false
//   return function request(arg) {
//     return new Promise((resolve, reject) => {
//       if (!isRunning) {
//         isRunning = true
//         promiseFn(arg).then(res => {
//           isRunning = false
//           resolve(res)
//         })
//       }
//     })
//   }
// }

// // 模拟一次请求
// function bar(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(data), 1000)
//   })
// }

// const request = singlePipe(bar)

// request(1).then((res) => console.log(res)) // 1
// request(2).then((res) => console.log(res)) // 无响应
// setTimeout(() => {
//   request(3).then((res) => console.log(res)) // 3
// }, 1001)

// console.log(sum(1, 2)(3)(4)(5, 6, 7)()); // 28
// console.log(sum()); // 0

// function sum(...args) {
//   if (args.length === 0) return 0
//   const totalArgs = [...args]

//   return function dummy(...args1) {
//     if (args1.length === 0) {
//       return totalArgs.reduce((prev, cur) => prev + cur)
//     } else {
//       totalArgs.push(...args1)
//       return dummy
//     }
//   }
// }

// const input = [['A', 'B'], ['a', 'b'], ['1', '2']];
// const output = ['Aa1', 'Aa2', 'Ab1', 'Ab2', 'Ba1', 'Ba2', 'Bb1', 'Bb2']

// function process(matrix) {
//   const result = []
//   function recurse(index, str) {
//     if (index === matrix.length) {
//       result.push(str)
//       return
//     }
//     for (let i = 0; i < matrix[index].length; i++) {
//       recurse(index + 1, str + matrix[index][i])
//     }
//   }
//   recurse(0, '')

//   return result
// }

// console.log(process(input));

// let list = [
//   { id: 1, name: "部门A", parentId: 0 },
//   { id: 2, name: "部门B", parentId: 0 },
//   { id: 3, name: "部门C", parentId: 1 },
//   { id: 4, name: "部门D", parentId: 1 },
//   { id: 5, name: "部门E", parentId: 2 },
//   { id: 6, name: "部门F", parentId: 3 },
//   { id: 16, name: "部门L", parentId: 3 },
//   { id: 7, name: "部门G", parentId: 2 },
//   { id: 8, name: "部门H", parentId: 4 },
// ];

// function process(list, id = 0) {
//   const result = []

//   for (let i = 0; i < list.length; i++) {
//     const item = list[i]
//     if (item.parentId === id) {
//       result.push(item)
//       item.children = process(list, item.id)
//     }
//   }

//   return result
// }
// console.dir(process(list), {depth: Infinity})

// const { getData, swap } = require("./utils");

// const arr = getData(100);

// function quickSort(arr) {
//   function swap(x, y) {
//     [arr[x], arr[y]] = [arr[y], arr[x]]
//   }

//   function getPivot(left, right) {
//     const mid = (left + right) >> 1

//     if (arr[left] > arr[mid]) {
//       swap(left, mid)
//     }
//     if (arr[left] > arr[right]) {
//       swap(left, right)
//     }
//     if (arr[mid] > arr[right]) {
//       swap(mid, right)
//     }

//     swap(mid, right - 1)

//     return arr[right - 1]
//   }

//   function recurse(left, right) {
//     if (left >= right) return
//     const pivot = getPivot(left, right)
//     let i = left
//     let j = right - 1

//     while (i < j) {
//       while (arr[++i] < pivot) {}
//       while (arr[--j] > pivot) {}
//       if (i < j) {
//         swap(i, j)
//       }
//     }

//     swap(i, right - 1)
//     recurse(left, i - 1)
//     recurse(i + 1, right)
//   }

//   recurse(0, arr.length - 1)
// }

// console.log(arr);
// quickSort(arr)
// console.log(arr);

// 3s
// function red() {
//   console.log("red");
// }
// // 1s
// function green() {
//   console.log("green");
// }
// // 2s
// function yellow() {
//   console.log("yellow");
// }

// function light(time, cb) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cb();
//       resolve();
//     }, time);
//   });
// }

// function print() {
//   light(3000, red).then(_ => {
//     light(2000, green).then(_ => {
//       light(1000, yellow).then(_ => {
//         print()
//       })
//     })
//   })
// }

// print()

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('p1')
  }, 3000)
})
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('p2')
  }, 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('p3')
  }, 2000)
})

const arr = [p1, p2, p3]

async function test(arr) {
  // 普通 for 循环
  // for (let i = 0; i < arr.length; i++) {
  //   const res = await arr[i]
  //   console.log(res);
  // }
  // let i = 0
  // for (const p of arr) {
  //   console.log(i++);
  //   const res = await p
  //   console.log(res);
  // }
  arr.forEach(async (p, index) => {
    console.log(index);
    const res = await p
    console.log(res);
  })
}

test(arr)
