export default class Vertex {
  constructor(index, data) {
    this.#index = index;
    this.#data = data;
  }
  get data() {
    return this.#data;
  }
  get index() {
    return this.#index;
  }

  set data(value) {
    this.#data = value;
  }

  set index(value) {
    this.#index = value;
  }

  toString() {
    return `${this.#data.toUpperCase()}`;
  }

  //private properties / Methods
  #index;
  #data;
}
