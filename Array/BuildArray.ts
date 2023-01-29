class MyArray {
  constructor () {
    this.length = 0
    this.data = {}
  }

  get (index) {
    return this.data[index]
  }

  push (item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop () {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length -1]
    this.length--
  }

  delete (index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems (index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
  } 
}

const newArray = new MyArray()
console.log(newArray)
newArray.push('3')
newArray.push('you')
console.log(newArray.get(0))
console.log(newArray)
console.log(newArray.pop())
newArray.push('you2')
newArray.push('you3')
newArray.push('you4')
newArray.push('you5')
newArray.delete(2)
console.log(newArray)