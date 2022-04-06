import { default as Interface } from "../../Interface/interface";
import assert from "assert";

/**
 * @description This class acts as an Enum, it has two memebers, Min and Max, the Heap class will check agaisnt these
 */
class Type {
  /**
   * @member
   */
  static MIN = new Type("MIN");
  /**
   * @member
   */
  static MAX = new Type("MAX");
  constructor(name) {
    this.name = name;
  }

  /**
   * @static_method
   * @description checks to see if a string represents a member of this enum
   * @param {String} candicate string name of potential member
   * @returns {Boolean} true if a given string represents a member, false otherwise
   */
  static isMemberOf(candicate) {
    if (typeof type !== "string") return false;
    if (candicate.toUpperCase() in this) return true;
    return false;
  }

  /**
   * @static_method
   * @param {String} type string representing memeber
   * @returns {String} member as string
   */
  static member(type) {
    if (typeof type !== "string") return null;
    if (type.toUpperCase() in this) {
      return this[type.toUpperCase()].name;
    }
    return null;
  }
}

export default class Heap extends Interface {
  constructor(max_size = Infinity, type = "min") {
    try {
      assert.equal(typeof max_size, typeof Number());
      assert.equal(typeof type, typeof String());
    } catch (e) {
      if (typeof type === "number" && typeof max_size === "string") {
        let type_cp = type;
        type = max_size;
        max_size = type_cp;
      } else {
        type = max_size;
        max_size = Infinity;
      }
    }

    super(max_size);
    this.#values = [];
    switch (Type.member(type)) {
      case "MIN":
        this.#sort = (a, b) => {
          return this.#values[a] <= this.#values[b];
        };
        break;
      case "MAX":
        this.#sort = (a, b) => {
          return this.#values[a] >= this.#values[b];
        };
        break;
      default:
        throw Interface.newErr(
          type
            ? `${
                typeof type == "string" ? type : typeof type
              } is not accepted as a heap-type. Type only accepts ${Object.values(
                Type
              )
                .map((type) => `'${type.name.toLowerCase()}'`)
                .join(", ")} of type 'string'`
            : "A heap type must be provided"
        );
    }

    this.#type = type;
  }

  /**
   * @property
   * @description allows access to the values within the heap
   * @returns {Array} values in heap
   */
  get values() {
    return this.#values;
  }

  /**
   * @property
   * @description allows access to the type-description
   * @returns {String} type of heap
   */
  get type() {
    return this.#type;
  }

  /**
   * @property
   * @description modifies the values within the heap
   */
  set values(value) {
    if (value.length > this.max)
      throw Interface.newErr(
        `Heap does not have enough space for Values of length ${value.length}`
      );
    this.#values = value;
  }

  /**
   * @method
   * @description inserts a value into the heap
   * @param {*} value value to be inserted
   */
  insert(value) {
    if (this.#values.length >= this.max)
      throw Interface.newErr("Heap has reached its max_size");
    this.#values.push(value);
    this.#siftUp(this.#values.length - 1);
  }

  /**
   * @method
   * @description removes the value with the most importance
   * @returns {*} value with most importance
   */
  remove() {
    if (!this.#values.length) return null;
    this.#swap(0, this.#values.length - 1);
    let value = this.#values.pop();
    this.#siftDown(0);
    return value;
  }

  /**
   * @method
   * @description Return the element with the highest priority without removing it.
   * @param {*} value
   * @returns {*} most important value
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.#values[0];
  }

  /**
   * @method
   * @description checks to see if the heap is empty
   * @returns {Boolean} whether or not the heap is empty
   */
  isEmpty() {
    return !this.#values.length;
  }

  show() {
    console.log(this.#values);
  }

  /**
   * @method
   * @description creates a partially sorted heap
   * @param {Array} values values for the heap
   * @param {Number} max_size the max size of the heap
   * @param {String} heap_type the type of heap
   * @returns {Heap} Partially built heap
   */
  static build_heap(values = [], max_size = Infinity, heap_type = "min") {
    if (!Array.isArray(values) || values.length === 0)
      throw Interface.newErr(
        "A values-array must be provided to construct a heap"
      );

    const heap = new Heap(max_size, heap_type);
    heap.values = values;
    heap.heapify();

    return heap;
  }

  /**
   * @method
   * @description checks through half of the values in the heap and ensure that they are in the right position
   */
  heapify() {
    let i = Math.floor(this.#values.length / 2) - 1;
    for (; i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  //private method / properties
  /**
   * @private_method
   * @description sorting method to pick the importance
   * @param {*} a a value to ranked
   * @param {*} b another value to be ranked
   * @returns {Boolean} whether or not a swap should happen*/
  #sort;

  /**
   * @private_method
   * @description Calculates the theoretical position for the parent of an element
   * @param {Number} child_indx Index of children
   * @returns {Number} Theoretical index of parent
   */
  #parentIndx(childIndx) {
    return Math.floor((childIndx - 1) / 2);
  }

  /**
   * @private_method
   * @description Calculates the theoretical position for the left element given a parent index
   * @param {Number} parentIndx Index where the parent can be found
   * @returns {Number} Theoretical index of the left child
   */
  #leftChildIndx(parentIndx) {
    return 2 * parentIndx + 1;
  }

  /**
   * @private_method
   * @description Calculates the theoretical position for the right element given a parent index
   * @param {Number} parentIndx Index where the parent can be found
   * @returns {Number} Theoretical index of the right child
   */
  #rightChildIndx(parentIndx) {
    return 2 * parentIndx + 2;
  }

  /**
   * @private_method
   * @description takes an index and moves the value upwards (depending on if the instance is a max or min heap)
   * @param {*} at_index index to start checking
   */
  #siftUp(at_index) {
    let childIndx = at_index,
      parentIndx = this.#parentIndx(childIndx);
    while (childIndx > 0 && this.#sort(childIndx, parentIndx)) {
      this.#swap(childIndx, parentIndx);
      childIndx = parentIndx;
      parentIndx = this.#parentIndx(childIndx);
    }
  }

  /**
   * @private_method
   * @description takes an index and moves the value downwards (depending on if the instance is a max or min heap)
   * @param {*} at_index index to start checking
   */
  #siftDown(at_index) {
    //  return this.#values[a] < this.#values[b];
    let parentIndx = at_index;
    while (true) {
      let left = this.#leftChildIndx(parentIndx),
        right = this.#rightChildIndx(parentIndx),
        candidate = parentIndx;

      if (left < this.#values.length && this.#sort(left, candidate))
        candidate = left;

      if (right < this.#values.length && this.#sort(right, candidate))
        candidate = right;

      if (candidate === parentIndx) return;
      this.#swap(parentIndx, candidate);
      parentIndx = candidate;
    }
  }

  /**
   * @private_method
   * @description takes in two indexies and swaps their values in place. i.e [1, 2, 3] => swap(0, 1) => [2, 1, 3]
   * @param {Number} a index to be swapped
   * @param {Number} b index to be swapped
   */
  #swap = (a, b) => {
    if (0 <= a && a < this.#values.length && 0 <= b && b < this.#values.length)
      [this.#values[a], this.#values[b]] = [this.#values[b], this.#values[a]];
  };

  /**@private @description holds the values for the heap */
  #values;

  /**@private @description describes the type of heap */
  #type;
}
