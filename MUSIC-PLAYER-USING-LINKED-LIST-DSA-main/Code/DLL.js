// Creating a node
class Node {
  constructor(name, length, path) {
    this.musicNode = {
      name: name,
      length: length,
      path: path,
    };
    this.prev = null;
    this.next = null;
  }
}

// creating double liked list obj and pointer
class DoubllyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.tempPos = null;
  }

  // push node to DLL
  push(name, length, path) {
    const newNode = new Node(name, length, path);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // set position of current node
  // default is pointer of head node
  setDefaulltPointer() {
    this.tempPos = this.head;
  }

  // traverse DLL and return music obj
  traverse(direction) {
    // forward direction
    if (direction === 1 && this.tempPos.next != null) {
      this.tempPos = this.tempPos.next;
      return this.tempPos.musicNode;
    } else if (direction === -1 && this.tempPos.prev != null) {
      //backward direction
      this.tempPos = this.tempPos.prev;
      return this.tempPos.musicNode;
    } else {
      return 0;
    }
  }

  // check for position of node
  nodePosition() {
    if (this.tempPos.next == null) {
      return -1; // last pos
    } else if (this.tempPos.prev == null) {
      return 1; // first pos
    } else {
      return 0; // middle pos
    }
  }
}

// inserting music in double linked list
const dll = new DoubllyLinkedList();
dll.push("Song 1", 1, "dsa mp3 files//Tum Hi Aana Marjaavaan.mp3");
dll.push("Song 2", 2, "dsa mp3 files//Epic DEMO.mp3");
dll.push("Song 3", 3, "dsa mp3 files//Lo-fi (Ani).mp3");
dll.push("Song 4", 4, "dsa mp3 files//Batch 1 Patriotic .mp3");
dll.push("Song 5", 5, "dsa mp3 files//Batch 2 Nature.mp3");
dll.push("Song 6", 6, "dsa mp3 files//Batch 3 Nature.mp3");
dll.push("Song 7", 7, "dsa mp3 files//Batch 4 Mother.mp3");

dll.setDefaulltPointer();
