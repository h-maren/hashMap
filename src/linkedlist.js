import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(key,value) {
    let newNode = new Node(key,value);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    this.size++;
  }
  get(key){
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (key === currentNode.key) {
        return currentNode.data;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  remove(key){
    let prevNode = this.head;
    if(key===prevNode.key){
      if(this.size===1){
        this.head=null;
      }
      else {
        this.head=prevNode.nextNode;
      }
      this.size--;
      return true;
    }
    let currentNode=prevNode.nextNode;
    while(currentNode){
      if(key===currentNode.key){
        prevNode.nextNode=null;
        this.size--;
        return true;
      }
      prevNode=currentNode;
      currentNode=currentNode.nextNode;
    }
  }
/*

  contains(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (value === currentNode.data) {
        return true;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  removeAt(index) {
    if (index < 0 || index > this.size - 1) {
      console.log("invalid index");
      return;
    }
    let prevNode = this.head;
    if (index === 0) {
      this.head = prevNode.nextNode;
      prevNode.nextNode = null;
      this.size--;
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.nextNode;
    }
    let removeNode = prevNode.nextNode;
    prevNode.nextNode = removeNode.nextNode;
    removeNode.nextNode = null;
    if (removeNode == this.tail) {
      this.tail = prevNode;
    }
    this.size--;
    */
  /*
  prepend(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }
  at(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }
  pop() {
    let currentNode = this.tail;
    return currentNode;
  }
  contains(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (value === currentNode.data) {
        return true;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (value === currentNode.data) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  toString() {
    let currentNode = this.head;
    let outputString = ``;
    while (currentNode) {
      let output = currentNode.data;
      outputString = outputString + `( ${output} ) -> `;
      currentNode = currentNode.nextNode;
    }
    console.log(`${outputString}` + ` null`);
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size - 1) {
      console.log("invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index == this.size - 1) {
      this.append(value);
      return;
    } else {
      let newNode = new Node(value);
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.nextNode;
      }
      newNode.nextNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
      this.size++;
    }
  }
  removeAt(index) {
    if (index < 0 || index > this.size - 1) {
      console.log("invalid index");
      return;
    }
    let prevNode = this.head;
    if (index === 0) {
      this.head = prevNode.nextNode;
      prevNode.nextNode = null;
      this.size--;
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.nextNode;
    }
    let removeNode = prevNode.nextNode;
    prevNode.nextNode = removeNode.nextNode;
    removeNode.nextNode = null;
    if (removeNode == this.tail) {
      this.tail = prevNode;
    }
    this.size--;
  }*/
}

export { LinkedList };
