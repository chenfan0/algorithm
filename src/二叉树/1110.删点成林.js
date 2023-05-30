// https://leetcode.cn/problems/delete-nodes-and-return-forest/description/

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

var delNodes = function(root, to_delete) {
  const res = []
  const deleteSet = new Set(to_delete)

  const dfs = (node, parent, whichChild) => {
    if (!node) return

    if (deleteSet.has(node.val)) { // 需要被删除
      if (parent) {
        parent[whichChild] = null
      }
      dfs(node.left, null)
      dfs(node.right, null)
    } else {
      // 不需要被删除且没有父节点，则push到数组中
      if (!parent) res.push(node)
      dfs(node.left, node, 'left')
      dfs(node.right, node, 'right')
    }
  }
  dfs(root)
  return res
}