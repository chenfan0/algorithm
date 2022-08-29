/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null
  const map = new Map()

  for (let i = 0; i < inorder.length; i++) {
      map.set(inorder[i], i)
  }
  function recurse(rootIndex, leftIndex, rightIndex) {
      // edge case
      if (leftIndex > rightIndex) return null
      const node = new TreeNode(postorder[rootIndex])
      // i是node在中序遍历的下标
      const i = map.get(postorder[rootIndex])
      // rightIndex - i + 1就是右子树的节点个数
      node.left = recurse(rootIndex  - (rightIndex - i + 1), leftIndex, i - 1)
      node.right = recurse(rootIndex - 1, i + 1, rightIndex)
      return node
  }
  return recurse(postorder.length - 1, 0, postorder.length - 1)
};