// https://leetcode-cn.com/problems/reverse-linked-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代方法
function reverseList(head) {
  let prev = null

  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

function reverseList(head) {
  // 找到倒数第二个节点，直接返回该节点
  if (!head || !head.next) return head

  const newHead = reverseList(head.next)
  // 将该节点的下一个节指向自己，自己指向null
  head.next.next = head
  head.next = null
  return newHead
}