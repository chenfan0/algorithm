// https://leetcode-cn.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const l3 = new ListNode(null, null);
  let p = l3;
  let plus = 0;
  while (l1 && l2) {
    const n1 = l1.val;
    const n2 = l2.val;
    const sum = n1 + n2 + plus;
    p.next = new ListNode(sum % 10, null);
    plus = Math.floor(sum / 10);
    l1 = l1.next;
    l2 = l2.next;
    p = p.next;
  }
  while (l1) {
    const n1 = l1.val;
    const sum = n1 + plus;
    p.next = new ListNode(sum % 10, null);
    plus = Math.floor(sum / 10);
    l1 = l1.next;
    p = p.next;
  }
  while (l2) {
    const n2 = l2.val;
    const sum = n2 + plus;
    p.next = new ListNode(sum % 10, null);
    plus = Math.floor(sum / 10);
    l2 = l2.next;
    p = p.next;
  }
  // 如果最后plus还有值需要再创建一个节点
  if (plus) {
    p.next = new ListNode(plus, null);
  }
  return l3.next;
}
