// 10 -> 15 -> 16
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    return this.length === 0;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  search(value) {
    let current = this.head;

    while (current.value) {
      if (current.value === value) {
        console.log(`Has ${value} in this Link List`);
        return true;
      }
      current = current.next;
    }
    console.log(`Has not ${value} in this Link List`);
    return false;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(15);
myLinkedList.append(16);
myLinkedList.append(21);
myLinkedList.prepend(30);
myLinkedList.search(21);
