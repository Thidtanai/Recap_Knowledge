class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = { Node, BstNode };
