import DataStructers from "./DataStructers.js";

// DataStructers sınıfından bir örnek oluşturun
const ds = new DataStructers();

// Stack nesnesi oluşturun ve test edin
const stack = ds.stack([1, 2, 3]);
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3

// Queue nesnesi oluşturun ve test edin
const queue = ds.queue([1, 2, 3]);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2