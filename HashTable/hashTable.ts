// let user = {
//   age: 54,
//   name: 'Mild',
//   magic: true,
//   scream: () => {
//     console.log('Ahhhh ha')
//   }
// }

// user.age // O(1)
// user.spell = 'Test' // O(1)
// user.scream() // O(1)

export class HashTable {
  data: Array<any> = []
  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key: string, value: number | string) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key: string) {
    let address = this._hash(key)
    let currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      } // O(n)
    } // O(1)
    return undefined
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }

    let result = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }
}

// ทิ้งคำถาม ระหว่างการ For loop เพิ่มดึงค่า key มาใช้ทีละตัว กับการ HasTable ที่มีการจัดหมวดหมู่ key ที่ซ้ำไว้แล้ว แล้วเอาค่ามาใช้อันไหนเร็วกว่ากัน?