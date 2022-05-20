import Queue from "../../../DSA/DataStructures/Queue/queue";

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(node, priority) {
    let e = { node, priority };
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > e.priority) {
        this.items.splice(i, 0, e);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(e);
    }
  }
  dequeue() {
    if (this.isEmpty()) return;
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function BFS(s, des, adjList, w, d) {
  let visited = [];
  let q = new Queue();
  q.enqueue(s);
  visited.push(s);
  if ((!w && !d)) {
    while (!q.isEmpty()) {
      let v = q.dequeue();
      let neighbors = adjList.get(v);
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited.includes(neighbors[i])) {
          visited.push(neighbors[i]);
          q.enqueue(neighbors[i]);
          if (neighbors[i] == des) {
            console.log(visited);
            return visited;
          }
        }
      }
    }
  } else {
    while (!q.isEmpty()) {
      let v = q.dequeue();
      let neighbors = adjList.get(v);
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited.includes(neighbors[i].node)) {
          visited.push(neighbors[i].node);
          q.enqueue(neighbors[i].node);
          if (neighbors[i].node == des) {
            return visited;
          }
        }
      }
    }
  }

  return "No Path Found";
}

function Dijkstra(s, des, adjList, w, d) {
  let animations = [];
  if ((!w && d) || (w && d) || (d && !w)) {
    if (BFS(s, des, adjList, w, d) == "No Path Found") {
      return ["No Path Found", null, null];
    }
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();
    for (let i = 0; i < adjList.size; i++) {
      distances[i] = Infinity;
      prev[i] = null;
    }
    distances[s] = 0;
    animations.push([s, 0]);
    pq.enqueue(s, 0);
    while (!pq.isEmpty()) {
      let x = pq.dequeue();
      let node = x.node;
      let neighbors = adjList.get(node);
      for (let i = 0; i < neighbors.length; i++) {
        let temp = distances[node] + neighbors[i].weight;
        if (temp < distances[neighbors[i].node]) {
          distances[neighbors[i].node] = temp;
          animations.push([neighbors[i].node, temp]);
          prev[neighbors[i].node] = node;
          pq.enqueue(neighbors[i].node, temp);
        }
      }
    }
    let path = [des];
    let itr = des;
    while (itr != s) {
      itr = prev[itr];
      path.push(itr)
    }
    return [path, distances, animations];
  } else {
    if (BFS(s, des, adjList, w, d) == "No Path Found") {
      return ["No Path Found", null, null];
    }
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();
    for (let i = 0; i < adjList.size; i++) {
      distances[i] = Infinity;
      prev[i] = null;
    }
    distances[s] = 0;
    pq.enqueue(s, 0);
    while (!pq.isEmpty()) {
      let x = pq.dequeue();
      let node = x.node;
      let neighbors = adjList.get(node);
      for (let i = 0; i < neighbors.length; i++) {
        let temp = distances[node] + 1;
        if (temp < distances[neighbors[i]]) {
          distances[neighbors[i]] = temp;
          prev[neighbors[i]] = node;
          pq.enqueue(neighbors[i], temp);
        }
      }
    }
    let path = [des];
    let itr = des;
    while (itr != s) {
      itr = prev[itr];
      path.push(itr)
    }
    return [path, distances, "test"];
  }
}

export { BFS, Dijkstra };
