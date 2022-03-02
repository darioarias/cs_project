import { default as List } from "../LinkedList/doublyLinkedList";

export default class Stack {
  constructor() {
    this.#list = new List();
  }

  push(value) {
    this.#list.append(value);
  }

  pop() {
    return this.#list.removeLast();
  }

  toString() {
    return this.#toHtmlString();
  }
  //private method/properties
  #list;
  #toHtmlString() {
    return "STACK does not have toString";
  }
}
