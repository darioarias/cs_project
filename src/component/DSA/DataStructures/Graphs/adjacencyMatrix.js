import { default as Graph } from "./graph";
import { default as Vertex } from "./vertex";
import { default as Edge } from "./edge";

import { default as Interface } from "../../Interface/interface";
export default class adjacencyMatrix extends Graph {
  constructor(max_vertexies = Infinity) {
    super();

    this.#weight = [];
    this.#vertices = [];
    this.#max_vertx = max_vertexies;
  }

  createVertex(data) {
    if (this.#vertices.length >= this.#max_vertx)
      throw Interface.newErr("Graph has reached max vertex size");

    const vertex = new Vertex(this.#vertices.length, data);
    this.#vertices.push(vertex);
    for (let i = 0; i < this.#weight.length; i++) {
      this.#weight[i].push(null);
    }
    this.#weight.push(new Array(this.#vertices.length).fill(null));
    return vertex;
  }

  addDirectedEdge(source, destination, weight) {
    this.#weight[source.index][destination.index] = weight;
  }

  edges(source) {
    let edges = [];

    for (let column = 0; column < this.#weight.length; column++) {
      let weight;
      if ((weight = this.#weight[source.index][column])) {
        edges.push(new Edge(source, this.#vertices[column], weight));
      }
    }

    return edges;
  }

  weight(source, destination) {
    return this.#weight[source.index][destination.index];
  }

  //private methods / properties
  #weight;
  #vertices;
  #max_vertx;
}
