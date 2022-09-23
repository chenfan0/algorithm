// https://leetcode.cn/problems/design-linked-list/
var MyLinkedList = function() {
  this.head = null
  this.tail = null
  this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.length) return -1
  let i = 0
  let dummy = this.head
  while (i < index) {
    dummy = dummy.next
    i++
  }
  return dummy.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = { val, next: null }
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    node.next = this.head
    this.head = node
  }
  this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = { val, next: null }
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
  this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) return
  if (index === this.length) {
    this.addAtTail(val)
    return
  }
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  const node = { val, next: null }
  let prev = null
  let dummy = this.head
  let i = 0
  while (i < index) {
    prev = dummy
    dummy = dummy.next
    i++
  }
  prev.next = node
  node.next = dummy
  this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.length) return
  if (index === 0) {
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
  } else if (index === this.length - 1) {
    let dummy = this.head
    while (dummy.next !== this.tail) {
      dummy = dummy.next
    }
    dummy.next = null
    this.tail = dummy
  } else {
    let i = 0
    let dummy = this.head
    while (i < index - 1) {
      dummy = dummy.next
      i++
    }
    dummy.next = dummy.next.next
  }
  this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */