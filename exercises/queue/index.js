// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = []
  }

  add = (number) => {
    this.queue = [...this.queue, number]
    return this.queue
  }

  remove = () => {
    let remove = this.queue[0]
    this.queue = this.queue.slice(1)
    return remove
  }
}

module.exports = Queue;
