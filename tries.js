// 208. Implement Trie (Prefix Tree)

let TrieNode = function () {
  this.children = new Map();
  this.endOfWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.children.has(c)) {
      curr.children.set(c, new TrieNode());
    }
    curr = curr.children.get(c);
  }
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.children.has(c)) {
      return false;
    }
    curr = curr.children.get(c);
  }
  return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  for (let c of prefix) {
    if (!curr.children.has(c)) {
      return false;
    }
    curr = curr.children.get(c);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 211. Design Add and Search Words Data Structure

let Node = function () {
  this.children = new Map();
  this.isAWord = false;
};

var WordDictionary = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.children.has(c)) {
      curr.children.set(c, new Node());
    }
    curr = curr.children.get(c);
  }
  curr.isAWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (index, node) => {
    let curr = node;
    for (let i = index; i < word.length; i++) {
      if (word[i] === ".") {
        for (let c of curr.children.values()) {
          if (dfs(i + 1, c)) {
            return true;
          }
        }
        return false;
      } else {
        if (!curr.children.has(word[i])) {
          return false;
        }
        curr = curr.children.get(word[i]);
      }
    }
    return curr.isAWord;
  };

  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
