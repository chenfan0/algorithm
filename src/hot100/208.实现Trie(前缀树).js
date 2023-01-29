// https://leetcode.cn/problems/implement-trie-prefix-tree/description/
var Trie = function() {
  this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let children = this.children

  for (const s of word) {
    if (!children[s]) {
      children[s] = { isEnd: false }
    }
    children = children[s]
  }
  children.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let children = this.children

  for (const s of word) {
    if (!children[s]) {
      return false
    }
    children = children[s]
  }
  return children.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let children = this.children

  for (const s of prefix) {
    if (!children[s]) {
      return false
    }
    children = children[s]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */