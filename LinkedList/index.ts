// 10 -> 15 -> 16
class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next  = newNode
    this.tail = newNode
    this.length++
    return this;
  }

  prepend (value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(15)
myLinkedList.append(16)
myLinkedList.prepend(30)
console.log(myLinkedList)