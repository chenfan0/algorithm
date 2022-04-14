// https://leetcode-cn.com/problems/binary-tree-right-side-view/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  root.height = 1;
  while (queue.length > 0) {
    const node = queue.shift();
    const height = node.height;

    // 当前节点为层序遍历的最后一个节点
    // 或者当前节点的下一个节点的高度比当前节点高
    // 则说明当前节点为当前层的最右边的节点
    if (!queue[0] || queue[0].height > height) {
      result.push(node.val)
    }

    if (node.left) {
      node.left.height = node.height + 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.height = node.height + 1;
      queue.push(node.right);
    }
  }

  return result;
}
