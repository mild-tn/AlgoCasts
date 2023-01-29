import { HashTable } from './HashTable/hashTable'

const myHashTable = new HashTable(5);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)
myHashTable.set('orange', 34)
myHashTable.set('orange', 3)
console.log(myHashTable.keys())
