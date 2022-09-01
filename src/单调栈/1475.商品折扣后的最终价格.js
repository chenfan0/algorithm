// https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) { 
  const stack = []
  const res = []

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i]
    while (stack.length && price < stack[stack.length - 1]) {
      stack.pop()
    }
    const del = stack.length ? stack[stack.length - 1] : 0
    res.push(price - del)
    stack.push(price)
  }
  return res.reverse()
}