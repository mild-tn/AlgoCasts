const strings  = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 byte of storage

// push 
strings.push('e') // O(1)

// pop
strings.pop() // O(1)
strings.pop() // O(1)

// unshift
strings.unshift('x') // O(n)

// splice
strings.splice(2,0, "alien") // O(n)

console.log(strings)

console.log("============ Class =================")
console.log("============ Referance Type=================")
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

console.log(object1 === object2)
console.log(object1 === object3)

object2.value = 3
// object1.value = 15
console.log(object1.value)
console.log(object2.value)
console.log(object3.value)

var arr1 = []
var arr2 = arr1
var arr3 = []
console.log(arr1 === arr2)
// console.log([] === [])
// console.log([] == [])

console.log("============ Instasiation =================")
class Player {
  constructor (name, type) {
    console.log(this)
    this.name = name
    this.type = type
  }

  introduce () {
    console.log(`Hi I am ${this.name} , I am a ${this.type}`)
  }
}


class Wizard extends Player {
  constructor (name, type) {
    super(name, type)
  }

  play () {
    console.log('WEEEEE I am a ' + this.type)
  }
} 

const wizard1 = new Wizard('Mild', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

console.log(wizard1.play())
console.log(wizard1.introduce())
console.log(wizard2.play())
console.log(wizard2.introduce())