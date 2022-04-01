function Dijkstra(grid, startNode, endNode) {}

function Astar(startNode, endNode) {
  console.log("A* Start");
  let path = [];
  let visitedNodes = [];
  let openList = [];
  let closedList = [];

  openList.push(startNode);

  while (openList.length > 0) {
    let least = 0;
    for (let i = 0; i < openList.length; i++) {
      if (openList[i].f < openList[least].f) {
        least = i;
      }
    }

    let currentNode = openList[least];
    visitedNodes.push(currentNode);
    openList = openList.filter((node) => node !== currentNode);
    closedList.push(currentNode);

    if (currentNode === endNode) {
      path.push(currentNode);
      let temp = currentNode;
      while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
      }
      console.log("Found Path!");
      return { path, visitedNodes };
    }

    let neighbourNodes = currentNode.neighbours;
    for (let i = 0; i < neighbourNodes.length; i++) {
      let n = neighbourNodes[i];
      if (n.isWall || closedList.includes(n)) {
        continue;
      }

      let tempG = currentNode.g + 1;
      let newPath = false;

      if (!openList.includes(n)) {
        n.g = tempG;
        newPath = true;
        openList.push(n);
      } else if (tempG < n.g) {
        n.g = tempG;
        newPath = true;
      }
      if (newPath) {
        n.h = heuristic(n, endNode);
        n.f = n.h + n.g;
        n.previous = currentNode;
      }
    }
  }
  console.log("No Path!");
  return { path, visitedNodes };
}

//Manhattan Distance
function heuristic(a, b) {
  let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
  return d;
}

export { Dijkstra, Astar };
