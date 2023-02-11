// https://leetcode.cn/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 使用字符串做法
  let str = '', p = head

  while (p) {
    str += p.val
    p = p.next
  }
  let start = 0, end = str.length - 1

  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // O1 空间复杂度做法
  let fast = head, slow = head

  while (true) {
    if (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    } else {
      break
    }
  }
  // slow为链表中间节点，翻转链表
  let prev = null
  while (slow) {
    const next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }
  // prev 为翻转后的链表头结点

  while (true) {
    if (!prev) {
      return true
    }
    if (prev.val !== head.val) {
      return false
    }

    prev = prev.next
    head = head.next
  }
}