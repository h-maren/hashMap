class Node {
  constructor(key,data = null, nextNode = null) {
    this.key = key;
    this.data = data;
    this.nextNode = nextNode;
  }
}

export { Node };
