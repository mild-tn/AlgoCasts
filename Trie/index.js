"use strict";
const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
  //Function to get the index of character 't'
  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0); //The charCodeAt() function returns the order of a given character
  }
  //Function to insert a key,value pair in the Trie
  insert(key) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase(); //Keys are stored in lowercase
    let currentNode = this.root;
    let index = 0; //To store the character index

    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (const element of key) {
      index = this.getIndex(element);

      if (currentNode.children[index] === null) {
        currentNode.children[index] = new TrieNode(element);
        console.log(String(element) + " inserted");
      }

      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }
  //Function to search for a given key in the Trie
  search(key) {
    if (key == null) {
      return false; //null key
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    //Iterate the Trie with given character index,
    //If it is null at any point then we stop and return false
    //We will return true only if we reach leafNode and have traversed the
    //Trie based on the length of the key

    for (const element of key) {
      index = this.getIndex(element);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode !== null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }
  //Function to delete a given key from the Trie
  delete(key) {
    return null;
  }
}

let t = new Trie();
console.log(t.getIndex("a"));

let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
console.log("Keys to insert: ");
console.log(keys);

//Construct Trie
for (const element of keys) {
  t.insert(element);
}
