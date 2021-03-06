import { default as Node } from "../Nodes/singlyLinkedListNode";
import { default as Interface } from "../../Interface/interface.js";
import { ThermostatOutlined } from "@mui/icons-material";

export default class SinglyLinkedList extends Interface {
  /**
   * @description creates an instance of SinglyLinedList and returns a reference
   * @param {*} head optional value to start the list.
   * @returns {SinglyLinkedList}
   */
  constructor(head = null, maxLength = Infinity) {
    super(maxLength);
    this.#head = this.#validate_node(head);
    this.#tail = this.#head;
    this.#length = 0;

    this.#maxSizeErr = Interface.newErr("List max-length reached.");
  }

  /**
   * @property
   * @description returns a reference to the head--first node--of the list
   * @return {Node}
   */
  get head() {
    return this.#head;
  }

  /**
   * @property
   * @param {*} value
   * @description Updates the reference of head
   */
  set head(value) {
    this.#head = value;
  }

  /**
   * @property
   * @description returns a reference to the tail--last node--of the list
   * @return {Node}
   */
  get tail() {
    return this.#tail;
  }

  /**
   * @property
   * @param {*} value
   * @description Updates the reference of tail
   */
  set tail(value) {
    this.#tail = value;
  }

  /**
   * @description Adds a value at the front of the list
   * @param {*} value
   */
  push(value) {
    if (this.#length >= this.max) throw this.#maxSizeErr;
    this.#length += 1;
    if (this.max) this.#head = new Node(value, this.#head);
    if (!this.#tail) this.#tail = this.#head;
  }

  /**
   * @description Adds a value at the end of the list
   * @param {*} value
   */
  append(value) {
    if (this.#length >= this.max) throw this.#maxSizeErr;
    if (this.isEmpty()) {
      this.push(value);
      return;
    }
    this.#length += 1;
    this.#tail.next = new Node(value);
    this.#tail = this.#tail.next;
  }

  /**
   * @description Adds a value after a particular list node
   * @param {Node} after_node
   * @param {*} value
   */
  insert(after_node, value) {
    if (!after_node) return;
    if (this.#length >= this.max) throw this.#maxSizeErr;
    this.#length += 1;
    if (after_node === this.#tail) {
      this.append(value);
      return;
    }
    let temp = new Node(value, after_node.next);
    after_node.next = temp;
    return;
  }

  /**
   * @description Removes the value at the front of the list.
   */
  pop() {
    if (!this.#head) return null;
    this.#length -= 1;
    let { value } = this.#head;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = this.#head;
      return value;
    }

    this.#head = this.#head.next ? this.#head.next : null;
    return value;
  }

  /**
   * @description Removes the value at the end of the list.
   */
  removeLast() {
    if (!this.#head) return null;
    this.#length -= 1;
    if (this.#head === this.#tail) {
      let { value } = this.#head;
      this.#head = null;
      this.#tail = this.#head;
      return value;
    }
    let beforeLast = this.#beforeTail();
    let { value } = beforeLast.next;
    beforeLast.next = null;

    this.#tail = beforeLast;
    return value;
  }

  /**
   * @description Removes a value anywhere in the list.
   * @param {Number} at_index
   */
  remove(at_index) {
    if (at_index === 0) {
      return this.pop();
    }

    let index = 0,
      previous = null,
      current = this.#head;

    while (current) {
      if (at_index === index++) {
        if (current === this.#tail) {
          return this.removeLast();
        }
        this.#length -= 1;
        let { value } = current;
        previous.next = current.next;
        return value;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  /**
   * @method
   * @description seaches the list for a value.
   * @param {*} value the value to search for
   * @returns the index of the value if found.
   */
  search(value) {
    if (!this.#head || (!value && value !== 0)) return null;
    if (this.#head.value === value) return 0;
    if (this.#tail.value === value) return this.#length - 1;
    let current = this.#head,
      indx = 0;

    while ((current = current.next) && current !== this.#tail) {
      if (current.value === value) return ++indx;
      else indx++;
    }

    return null;
  }

    /**
   * @method
   * @description returns the length of the list.
   * @param {*} None
   * @returns length of the list.
   */
    lengthLinkedList() {
      return this.#length;
    }

  /**
   * @description A way to verify if the list is empty
   */
  isEmpty() {
    return !this.#head;
  }

  node(index) {
    let current = this.#head,
      idx = 0;
    while (current) {
      if (idx === index) return current;
      idx += 1;
      current = current.next;
    }

    return null;
  }

  /**
   * @static
   * @description a way to check the type of list this is
   * @returns {String} type of this List
   */
  static get __type() {
    return "Singly_Linked_list";
  }

  /**
   * @description this method combines all of the node in a list
   * @returns an array of all of the nodes in the list
   */
  toArr() {
    const _res = [];
    for (let current = this.#head; current; current = current.next)
      _res.push(current);
    return _res;
  }

  //private properties / methods
  #head;
  #tail;
  #length;
  #maxSizeErr;
  #beforeTail() {
    if (!this.#head) return null;
    if (!this.#head.next) return this.#head;

    let current = this.#head;
    while (current.next.next) current = current.next;

    return current;
  }

  #validate_node(value) {
    if ((value || value === 0) && value.__type !== Node.__type)
      return new Node(value);
    return value;
  }
}
