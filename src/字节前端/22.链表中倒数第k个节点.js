// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function getKthFromEnd(head, k) {
  // 要获取倒数第k个，只需要让快指针先走k步，然后快慢指针一起走
  // 当快指针到最后时，慢指针就是第k个节点
  let fast = head
  let slow = head
  while (k > 1) {
    fast = fast.next
    k--
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
