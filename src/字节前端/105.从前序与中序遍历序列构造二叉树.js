/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function buildTree(preorder, inorder) {
  function recurse(rootIndex, left, right) {
    if (left > right) return null;
    const i = inorder.indexOf(preorder[rootIndex]);
    const node = new TreeNode(preorder[rootIndex]);

    node.left = recurse(rootIndex + 1, left, i - 1);
    node.right = recurse(rootIndex + (i - left) + 1, i + 1, right);

    return node;
  }

  return recurse(0, 0, inorder.length - 1);
}
