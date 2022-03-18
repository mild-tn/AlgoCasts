// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.countOfSize = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.countOfSize++;
  }

  size() {
    // let count = 0
    // while(this.head.next) {
    //   count++
    // }
    // return count
    return this.countOfSize;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // let data = this.head;
    // while (data.next) {
    //   data = data.next;
    // }
    // return data;

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
    this.countOfSize = 0;
  }

  removeFirst() {
    if (this.size() === 1) {
      this.countOfSize--;
      this.head = null;
    } else {
      this.countOfSize--;
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.countOfSize--;
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    this.countOfSize--;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    this.countOfSize++;
  }

  getAt(wantIndex) {
    if (this.size() < wantIndex) {
      return null;
    }

    let node = this.head;
    for (let index = 0; index < wantIndex; index++) {
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
