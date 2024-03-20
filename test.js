import DataStructers from "./DataStructers.js";


const ds = new DataStructers();


const stack = ds.stack([1, 2, 3]);
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3


const queue = ds.queue([1, 2, 3]);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
