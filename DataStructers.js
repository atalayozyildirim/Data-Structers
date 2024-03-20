 class DataStructers {
  constructor(data) {
    this.data = data
    this.left = null;
    this.right = null;
  }

  // İlk giren ilk çıkar mantığı ile çalışan bir veri yapısıdır.
  queue = (value) => {
    let list = {};
    list.data = [...value];

    list.enqueue = (element) => {
      list.data.push(element);
    };

    list.dequeue = () => {
      return list.data.shift();
    };

    list.front = () => {
      return list.data[0];
    };

    list.back = () => {
      return list.data[this.data.length - 1];
    };

    list.display = () => {
      return list.data;
    };
    return list;
  };
  // Son giren ilk çıkar mantığı ile çalışan bir veri yapısıdır.
  stack = (value) => {
    let list = {};
    list.data = [...value];

    list.push = (element) => {
      list.data.push(element);
    };

    list.pop = () => {
      return list.data.pop();
    };

    list.peek = () => {
      return list.data[list.data.length - 1];
    };

    list.isEmpty = () => {
      return list.data.length === 0;
    };
    return list;
  };

  //Linked List
  LinkedList = () => {
    let list = {};
    list.head = null;

    list.Node = (data, next = null) => {
      return {
        data: data,
        next: next,
      };
    };

    list.insertFirst = (data) => {
      list.head = list.Node(data, list.head);
    };

    list.printListData = () => {
      let current = list.head;

      while (current) {
        console.log(current.data);
        current = current.next;
      }
    };

    return list;
  };

  // Hash Table
  Hash = () => {
    let list = {};
    list.table = new Array(137);

    list.simpleHash = (data) => {
      let total = 0;
      for (let i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
      }
      return total % list.table.length;
    };

    list.put = (data) => {
      let pos = list.simpleHash(data);
      list.table[pos] = data;
    };

    list.get = (data) => {
      return list.table[list.simpleHash(data)];
    };

    list.display = () => {
      for (let i = 0; i < list.table.length; i++) {
        if (list.table[i] !== undefined) {
          console.log(i + ": " + list.table[i]);
        }
      }
    };

    return list;
  };

  // Binary Search

  BinarySearch = (arr = [], target) => {
    let list = {};
    list.start = 0;
    list.end = arr.length - 1;

    arr.sort((a, b) => a - b);

    while (list.start <= list.end) {
      list.mid = Math.floor((list.start + list.end) / 2);

      if (arr[list.mid] === target) return list.mid;
      else if (arr[list.mid] < target) list.start = list.mid + 1;
      else list.end = list.mid - 1;
    }
    return false;
  };

 // Binary Tree
  BinaryTree = (data) => {

    let root = new DataStructers(data);
    root.left = null;
    root.right = null;

    root.preorder = function(node = this) {
      if(node != null) {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
    root.inorder = function(node = this) {
        if(node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    return root;
  }
}

export default  DataStructers;






