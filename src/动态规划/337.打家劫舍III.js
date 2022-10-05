// https://leetcode.cn/problems/house-robber-iii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
  // map1用于记录 当 isRob为true时的节点
  const map1 = new Map()
  // map2用于记录 当 isRob为false时的节点
  const map2 = new Map()
  const dfs = (node, isRob) => {
    if (isRob && map1.has(node)) return map1.get(node)
    if (!isRob && map2.has(node)) return map2.get(node)
    if (!node) return 0
    if (isRob) {
      // 当isRob为true，也就是当前节点是可以偷的
      // 那么取 偷当前节点的最大值和不偷当前节点的最大值
      const left = dfs(node.left, false)
      map2.set(node.left, left) // false 用map2保存
      const right = dfs(node.right, false)
      map2.set(node.right, right) // false map2保存
      const _left = dfs(node.left, true)
      map1.set(node.left, _left) // true map1保存
      const _right = dfs(node.right, true)
      map1.set(node.right, _right) // true map1保存
      const max = Math.max(left + right + node.val, _left + _right)
      map1.set(node, max) // 当前的isRob为true，所以用map1保存
      map2.set(node, _left + _right) // _left1 和 _left2都是true，则可以认为当前为isRob为false的取值
      return max
    } else {
      const left = dfs(node.left, true)
      map1.set(node.left, left)
      const right = dfs(node.right, true)
      map1.set(node.right, right)
      map2.set(node, left + right)
      return left + right
    }
  }
  return Math.max(dfs(root, true), dfs(root, false))
};