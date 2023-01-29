"use strict";
const LinkedList = require('./LinkedList.ts');
const Node = require('./Node.ts');
const Queue = require('./Queue.ts');
const Graph = require('./Graph.ts');

//Create Queue => let queue = new Queue(5), where 5 is size of queue
//Functions of Queue => queue.enqueue(int), queue.dequeue(), queue.isEmpty() 
//Breadth First Traversal of Graph g from source vertex 
function bfsTraversal(g) {
  let result = "";
  let num_of_vertices = g.vertices;
  // Write code here
  
  

  return result;
}

let g1=new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 0));
