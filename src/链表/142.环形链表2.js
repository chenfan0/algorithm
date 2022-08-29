// https://leetcode.cn/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) { 
  if (!head) return null
  let fast = head
  let slow = head

  while (true) {
    if (fast && fast.next) {
      fast = fast.next.next
    } else {
      return null
    }
    slow = slow.next
    if (slow === fast) break
  }

  fast = head

  while (slow !== fast) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}