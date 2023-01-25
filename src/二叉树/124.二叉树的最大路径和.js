// https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/

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
var maxPathSum = function(root) {
  let maxPathSum = Number.MIN_SAFE_INTEGER
  const maxGain = (node) => {
    if (!node) return 0

    // 左子树所能提供的最大值
    const leftMaxGain = Math.max(0, maxGain(node.left))
    // 右子树所能提供的最大值
    const rightMaxGain = Math.max(0, maxGain(node.right))
    // 当前节点作为根节点的最大路径和
    const curMaxPathSum = node.val + leftMaxGain + rightMaxGain
    // 当前节点所能提供的和
    const curMaxGain = node.val + Math.max(leftMaxGain, rightMaxGain)
    // 比较获取最大路径和
    maxPathSum = Math.max(maxPathSum, curMaxPathSum)
    // 返回当前节点的贡献
    return curMaxGain
  }

  maxGain(root)
  return maxPathSum
}