class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
  insert(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < (currentNode == null ? void 0 : currentNode.val)) {
      currentNode.leftChild = this.insert(currentNode == null ? void 0 : currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode == null ? void 0 : currentNode.rightChild, newValue);
    }
    return currentNode;
  }
  insertBST(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }
    this.insert(this.root, newValue);
  }
  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }
  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }
  }
  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.rightChild);
      console.log(currentNode.val);
    }
  }
  search(value) {
    let currentNode = this.root;
    while (currentNode && currentNode.val !== value) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    return currentNode;
  }
  delete(currentNode, value) {
    if (currentNode === null) {
      return false;
    }
    let parentNode;
    while (currentNode && currentNode.val !== value) {
      parentNode = currentNode;
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    if (currentNode === null) {
      return false;
    } else if (currentNode.leftChild === null && currentNode.rightChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = null;
        return true;
      } else if (currentNode.val < parentNode.val) {
        parentNode.leftChild = null;
        return true;
      } else {
        parentNode.rightChild = null;
        return true;
      }
    } else if (currentNode.rightChild === null) {
      if (currentNode.val === this.root.val) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.leftChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.leftChild;
        return true;
      } else {
        parentNode.rightChild = currentNode.leftChild;
        return true;
      }
    } else if (currentNode.leftChild === null) {
      if (currentNode.val == this.root.val) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.rightChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.rightChild;
        return true;
      } else {
        parentNode.rightCHild = currentNode.rightChild;
        return true;
      }
    } else {
      let minRight = currentNode.rightChild;
      while (minRight.leftChild !== null) {
        minRight = minRight.leftChild;
      }
      let tmp = minRight.val;
      this.delete(this.root, minRight.val);
      currentNode.val = tmp;
      return true;
    }
  }
}
let BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);
console.log("========preOrderPrint()=========");
BST.preOrderPrint(BST.root);
console.log("========inOrderPrint()=========");
BST.inOrderPrint(BST.root);
console.log("========postOrderPrint()=========");
BST.postOrderPrint(BST.root);
console.log("======== Search 8 =========");
console.log(BST.search(8));
console.log(BST.search(11));
console.log(BST.search(12));
let BST2 = new BinarySearchTree(6);
console.log("The root val for BST : ", BST2.root.val);
BST2.insertBST(4);
BST2.insertBST(9);
BST2.insertBST(5);
BST2.insertBST(2);
BST2.insertBST(8);
BST2.insertBST(12);
BST2.insertBST(1);
BST2.insertBST(3);
BST2.inOrderPrint(BST2.root);
console.log("Delete 9!");
console.log(BST2.delete(BST2.root, 9));
BST2.inOrderPrint(BST2.root);
//# sourceMappingURL=index.js.map
