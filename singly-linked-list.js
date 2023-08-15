class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length - 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length - 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node();

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    var current = this.head;
    var counter = 0;

    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index, val) {
    if (index < 0 || index > this.length) return undefined;

    if (index === this.length - 1) return this.pop(val);

    if (index === 0) return this.shift(val);

    var prevNode = this.get(index - 1);
    var deletedNode = prevNode.next;
    var nextNode = deletedNode.next;
    prevNode.next = nextNode;
    this.length - 1;

    return deletedNode;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList();
