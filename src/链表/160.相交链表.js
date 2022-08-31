// https://leetcode.cn/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) { 
  let i = headA
  let j = headB

  while (i !== j) {
    i = i === null ? headB : i.next
    j = j === null ? headA : j.next
  }

  return i
}