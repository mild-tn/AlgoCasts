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
    if (!currentNode) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
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
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode) {
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
}

let BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val);

// Insert to recursive
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);

// General Insert not for recursive
// BST.insert(4);
// BST.insert(9);
// BST.insert(5);
// BST.insert(2);
// BST.insert(8);
// BST.insert(12);
// BST.insert(10);
// BST.insert(14);
console.log("", BST);

console.log("========preOrderPrint()=========");
BST.preOrderPrint(BST.root);

console.log("========inOrderPrint()=========");
BST.inOrderPrint(BST.root);

console.log("========postOrderPrint()=========");
BST.postOrderPrint(BST.root);

console.log("======== Search 8 =========");
console.log(BST.search(8));
// console.log(BST.search(11));
// console.log(BST.search(12));

// let BST2 = new BinarySearchTree(6);
// console.log("The root val for BST : ", BST2.root.val);
// BST2.insertBST(4);
// BST2.insertBST(9);
// BST2.insertBST(5);
// BST2.insertBST(2);
// BST2.insertBST(8);
// BST2.insertBST(12);
// BST2.insertBST(1);
// BST2.insertBST(3);

// Deletion when val not found
// BST2.inOrderPrint(BST2.root);
// console.log("Delete 10!")
// console.log(BST2.delete(BST2.root,10))

// Deleting a Leaf Node
// BST2.inOrderPrint(BST2.root);
// console.log("Delete 12!")
// console.log(BST2.delete(BST2.root,12))
// BST2.inOrderPrint(BST2.root);

// Deletion when the node to be deleted has a left child only
// BST2.inOrderPrint(BST2.root);
// console.log("Delete 1!")
// console.log(BST2.delete(BST2.root, 1));
// BST.inOrderPrint(BST2.root)

// Deletion when the node to be deleted has a right child only
// BST2.inOrderPrint(BST2.root);
// console.log("Delete 3!")
// console.log(BST2.delete(BST2.root, 3));
// BST2.inOrderPrint(BST2.root)

// Deletion when the node to be deleted has two children
// BST2.inOrderPrint(BST2.root);
// console.log("Delete 9!");
// console.log(BST2.delete(BST2.root, 9));
// BST2.inOrderPrint(BST2.root);
