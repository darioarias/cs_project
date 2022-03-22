import { default as Interface } from "../../Interface/interface";
import { default as Heap } from "../Heaps/heap";

export default class PriorityQueue extends Interface {
  constructor(max_size = Infinity, type = "min") {
    [max_size, type] = PriorityQueue.verify_types(max_size, type);
    super(max_size);
    this.#heap = new Heap(type);
  }
  /**
   * @property
   * @description access the heap for this class
   * @returns {Heap} Heap for class
   */
  get heap() {
    return this.#heap;
  }

  /**
   * @property
   * @description sets a reference for the heap of the class
   * @param {Heap} value -- reference to new heap
   */
  set heap(value) {
    if (value.values.length > this.max)
      throw Interface.newErr(
        `Priority Queue does not have enough space for ${value.values.length} elements`
      );
    this.#heap = value;
  }

  /**
   * @method
   * @description Inserts an element into the queue.
   * @param {*} value -- value to be inserted into the Priority queue;
   * @returns {Boolean} true if the operation was successful.
   */
  enqueue(value) {
    if (this.#heap.values.length >= this.max)
      throw Interface.newErr("Priority queue has reached it's max-size");
    this.#heap.insert(value);
  }

  /**
   * @method
   * @description Removes the element with the highest priority and returns it.
   * @returns {*} Returns nil if the queue was empty.
   */
  dequeue() {
    return this.#heap.remove();
  }

  /**
   * @static
   * @description creates a new priority queue
   * @param {Array} values the values for the new priority queue
   * @param {Number} max_size the max-size for the priority queue
   * @param {String} queue_type the type of queue; min, max
   * @returns {PriorityQueue} newly created queue
   */
  static build_queue(values = [], max_size = Infinity, queue_type = "min") {
    [max_size, queue_type] = PriorityQueue.verify_types(max_size, queue_type);
    let heap;
    try {
      heap = Heap.build_heap(values, queue_type);
    } catch (e) {
      throw e;
    }

    const queue = new PriorityQueue(max_size);
    queue.heap = heap;

    return queue;
  }

  /**
   * @static
   * @description checks, and switches--if need be, max and type for a potential priority queue
   * @param {*} max raw max value for a priority queue
   * @param {*} type raw type value for a priority queue
   * @returns {Array} max and type for a potential heap
   */
  static verify_types(max, type) {
    try {
      if (!(typeof max === "number"))
        throw new Error("max is not of type number");
      if (!(typeof type === "string"))
        throw new Error("type is not of type string");
    } catch (e) {
      if (typeof max === "string" && typeof type === "number") {
        let typeCopy = type;
        type = max;
        max = typeCopy;
      } else {
        type = max;
        max = Infinity;
      }
    }
    return [max, type];
  }

  /**
   * @method
   * @description checks to see if the priority queue is empty
   * @returns {Boolean} status of the priority
   */
  isEmpty() {
    return this.#heap.isEmpty();
  }

  /**
   * @method
   * @description checks the most relevant member of the queue.
   * @returns {*} most relevant element on queue
   */
  peek() {
    return this.#heap.peek();
  }

  //private methods / properties
  /**@private @description reference to the heap used for this queu */
  #heap;
}
