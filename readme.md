
# Data Structures in JavaScript

This repository contains a JavaScript class `DataStructers` that implements various data structures and algorithms.

## DataStructers Class

The `DataStructers` class includes the following data structures and algorithms:

### Queue

A Queue follows the First-In-First-Out (FIFO) rule. The `queue` method takes an array as an argument and returns an object with methods to `enqueue`, `dequeue`, `front`, `back`, and `display` the queue.

### Stack

A Stack follows the Last-In-First-Out (LIFO) rule. The `stack` method takes an array as an argument and returns an object with methods to `push`, `pop`, `peek`, `isEmpty`, and `display` the stack.

### Linked List

The `LinkedList` method returns an object with methods to insert data at the beginning of the list (`insertFirst`) and to print all the data in the list (`printListData`).

### Hash Table

The `Hash` method returns an object with methods to put data into the hash table (`put`), get data from the hash table (`get`), and display the hash table (`display`).

### Binary Search

The `BinarySearch` method takes an array and a target value as arguments, and returns the index of the target value in the sorted array, or `false` if the target value is not found.

### Binary Tree

The `BinaryTree` method takes a data value as an argument and returns a binary tree object with `preorder` and `inorder` traversal methods.

## Usage

First, import the `DataStructers` class from the `DataStructers.js` file:

```javascript
import DataStructers from "./DataStructers.js";
const ds = new DataStructers();
// Create a queue
const queue = ds.queue([1, 2, 3]);
queue.enqueue(4);
console.log(queue.dequeue()); // 1

// Create a stack
const stack = ds.stack([1, 2, 3]);
stack.push(4);
console.log(stack.pop()); // 4