class VirtualUndef {
  constructor(
    message = "Check that all inhereted virtual functions are defined"
  ) {
    this.#message = message;
  }
  toString() {
    return `undefinedVirtual: ${this.#message}`;
  }
  #message;
}
class Error {
  constructor(message = "") {
    this.#message = message;
    this.#time = Date.now();
  }

  get message() {
    return this.#message;
  }

  set message(value) {
    this.#message = value;
  }

  toString() {
    return `${this.#message} - ${this.#time}`;
  }
  #message;
  #time;
}

export default class Interface {
  constructor(max_size = Infinity) {
    this.#MAX_SIZE = typeof max_size === "number" ? max_size : 0;
  }

  get max() {
    return this.#MAX_SIZE;
  }

  set max(value) {
    this.#MAX_SIZE = value;
  }

  makeErr(message = "Error-deafult") {
    return new Error(message);
  }

  /**
   * @virtual
   * @description breaks down Data Structure into an array format
   * @returns Array
   */
  toArr() {
    throw new VirtualUndef(
      `${this.constructor.name} has no implementation of a virtual-inherented method`
    );
  }

  #MAX_SIZE;
}
