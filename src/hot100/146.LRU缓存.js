// https://leetcode.cn/problems/lru-cache/description/



// 利用map插入数据时是有顺序的特点
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }
  return -1
}


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.map.delete(key)
  this.map.set(key, value)

  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */