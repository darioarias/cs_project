import { default as Graph } from "./graph";
import { default as Edge } from "./edge";
import { default as Vertex } from "./vertex";

import { default as Interface } from "../../Interface/interface";
import { default as Enums } from "./enums";
import assert from "assert";
const { EdgeType } = Enums;

export default class AdjacencyList extends Graph {
  constructor(max_vertexies = Infinity, max_edges = Infinity) {
    try {
      assert.equal(
        "number",
        typeof max_vertexies,
        "'max_vertexies' must be a number"
      );
      assert.equal("number", typeof max_edges, "'max_edges' must be a number");
    } catch (e) {
      throw Interface.newErr(e.message);
    }

    super();
    this.#adj_list = {};
    this.#max_edges_per_vertex = max_edges;
    this.#max_vertexies = max_vertexies;
  }

  get count() {
    return Object.keys(this.#adj_list).length;
  }

  createVertex(data) {
    const vertex = new Vertex(this.count, data);
    if (vertex in this.#adj_list) return null;
    if (this.count > this.#max_vertexies)
      throw Interface.newErr("Max Vertexies reached");
    this.#adj_list[vertex] = [];
    return vertex;
  }

  addDirectedEdge(source, destination, weight) {
    if (!(source in this.#adj_list) || !(destination in this.#adj_list))
      return false;
    let edge = new Edge(source, destination, weight);

    if (this.#adj_list[source].length > this.#max_edges_per_vertex)
      throw Interface.newErr("Max edges per vetex reached");

    this.#adj_list[source].push(edge);
    return true;
  }

  edges(source) {
    if (source in this.#adj_list) return this.#adj_list[source];
    return [];
  }

  weight(source, destination) {
    for (let edge of this.edges(source)) {
      if (edge.destination === destination) return edge.weight;
    }
    return undefined;
  }

  //private methods / properties
  #adj_list;
  #max_edges_per_vertex;
  #max_vertexies;
}
