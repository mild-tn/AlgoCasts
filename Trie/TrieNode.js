class TrieNode {
  constructor(char) {
    this.children = [];
    for (let index = 0; index < 26; index++) {
      this.children[index] = null;
    }

    this.isEndWord = false;
    this.char = char;
  }

  markAsLeaf() {
    this.isEndWord = true;
  }

  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}
module.exports = TrieNode;
