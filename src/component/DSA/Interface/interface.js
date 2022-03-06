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

export default class Interface {
  constructor() {}

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
}
