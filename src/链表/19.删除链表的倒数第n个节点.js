// https://leetcode.cn/problems/SLwz0R/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个新的节点指向头节点
  // 这样就不需要判断删除的节点是否为头节点
  const dummy = new ListNode(0, head)
  let fast = dummy
  let slow = dummy

  while (n >= 0) {
    fast = fast.next
    n--
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  // 返回dummy.next
  return dummy.next
}