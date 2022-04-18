// https://leetcode-cn.com/problems/linked-list-cycle/


/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 使用set
function hasCycle(head) {
  if (!head) return false
  const set = new Set()

  while (head) {
    if (set.has(head)) {
      return true
    }
    set.add(head)
    head = head.next
  }

  return false
}

// 快慢指针
function hasCycle(head) {
  if (!head) return false
  let slow = head
  let fast = head.next

  while (slow.next) {
    // 如果快慢指针相等，则说明有环
    if (slow === fast) return true
    if (fast && fast.next) {
      fast = fast.next.next
    } else {
      // 不能满足快指针走两步，则说明没有环
      return false
    }
    slow = slow.next
  }
  return false
}
