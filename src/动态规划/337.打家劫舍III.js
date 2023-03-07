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

  const dfs = (node) => {
    if (!node) {
      return [0, 0]  // 第一个 0 表示选择了当前节点对应的最大值，第二个 0 表示不选择当前节点对应的最大值
    }

    const left = dfs(node.left)
    const right = dfs(node.right)
    const select = node.val + left[1] + right[1]
    const noSelect = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

    return [select, noSelect]
  }

  return Math.max(...dfs(root))
};