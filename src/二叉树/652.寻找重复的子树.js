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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) { 
  const map = new Map()
  const result = new Set()

  const dfs = (node) => {
    if (!node) {
      return ''
    }
    let str = node.val
    str += '('
    str += dfs(node.left)
    str += ')('
    str += dfs(node.right)
    str += ')'
    if (map.has(str)) {
      result.add(map.get(str))
    } else {
      map.set(str, node)
    }
    return str
  }
  dfs(root)
  return [...result]
}
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function (root) { 
   const map = new Map()
   const result = new Set()
   let idx = 1
   const dfs = (node) => {
     if (!node) return 0
     const val = [node.val, dfs(node.left), dfs(node.right)]
     const str = val.toString()
     if (map.has(str)) {
       const [node, idx] = map.get(str)
       result.add(node)
       return idx
     } else {
       map.set(str, [node, idx])
       return idx++
     }
   }
   dfs(root)
   return [...result]
}