import React, { useState, useEffect } from "react";
import PathNode from "./PathNode";
import "./Pathfind.css";
import { Astar, Dijkstra } from "./algorithms/PathFinding";

const rows = 15;
const cols = 30;
const m_StartNodeRow = 0;
const m_StartNodeCol = 0;
const m_EndNodeRow = rows - 5;
const m_EndNodeCol = cols - 5;

const PathFindingViz = () => {
  const [grid, setGrid] = useState([]);
  const [path, setPath] = useState([]);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [algoOption, setAlgoOption] = useState("A*");
  const [click, setClick] = useState(false);
  const [drag, setDrag] = useState({ start: false, end: false });
  useEffect(() => {
    createGrid();
  }, []);

  const handleAlgoSelect = (e) => {
    setAlgoOption(e.target.value);
  };

  const handleMouseDown = (e) => {};

  const handleMouseUp = () => {
    setClick(false);
    setDrag({ begin: false, end: false });
  };

  const handleClick = (e) => {
    if (e.target.className === "path" || e.target.className === "path ") {
      let text = e.target.id;
      const arr = text.split("-");
      console.log(arr);
      grid[parseInt(arr[1])][parseInt(arr[2])].isWall = true;
      e.target.className = "path path-wall";
    }
  };

  const createGrid = () => {
    const Grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      const rows = [];
      for (let j = 0; j < cols; j++) {
        Grid[i] = new Array(cols);
      }
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        Grid[i][j] = new createNode(i, j);
      }
    }
    setGrid(Grid);
    addNeighbours(Grid);
    setPath([]);
    setVisitedNodes([]);
  };

  const resetGrid = () => {
    let elements = document.getElementsByClassName("path-visitedNodes");
    while (elements.length) {
      elements[0].classList.remove("path-visitedNodes");
    }
    elements = document.getElementsByClassName("path-shortestPath");
    while (elements.length) {
      elements[0].classList.remove("path-shortestPath");
    }
    elements = document.getElementsByClassName("path-wall");
    while (elements.length) {
      elements[0].classList.remove("path-wall");
    }
    createGrid();
  };

  const addNeighbours = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].addneighbours(grid);
      }
    }
  };

  function createNode(i, j) {
    this.x = i;
    this.y = j;
    this.isStart = i === m_StartNodeRow && j === m_StartNodeCol;
    this.isEnd = i === m_EndNodeRow && j === m_EndNodeCol;
    this.isWall = false;
    this.previous = undefined;
    this.neighbours = [];
    this.addneighbours = function (grid) {
      let i = this.x;
      let j = this.y;
      if (i > 0) this.neighbours.push(grid[i - 1][j]);
      if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
      if (j > 0) this.neighbours.push(grid[i][j - 1]);
      if (j < cols - 1) this.neighbours.push(grid[i][j + 1]);
    };
    this.f = 0;
    this.g = 0;
    this.h = 0;
  }

  const visualize = () => {
    let results;

    const startNode = grid[m_StartNodeRow][m_StartNodeCol];
    const endNode = grid[m_EndNodeRow][m_EndNodeCol];
    switch (algoOption) {
      case "Dijkstra":
        results = Dijkstra(grid, startNode, endNode);
        break;
      case "A*":
        results = Astar(startNode, endNode);
        break;
    }
    setPath(results.path);
    setVisitedNodes(results.visitedNodes);
    visualizePath();
    console.log(results.path);
  };

  const displayGrid = (
    <div
      className="path-grid"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="path-grid-rows">
            {row.map((col, colIndex) => {
              const { isStart, isEnd, isWall } = col;
              return (
                <PathNode
                  key={colIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  isWall={isWall}
                  row={rowIndex}
                  col={colIndex}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
  const visualizeShortestPath = (shortestPath) => {
    for (let i = 0; i < shortestPath.length; i++) {
      const node = shortestPath[i];
      if (node.x == m_StartNodeCol && node.y == m_StartNodeRow) continue;
      if (node.x == m_EndNodeCol && node.y == m_EndNodeRow) continue;
      setTimeout(() => {
        document.getElementById(`path-${node.x}-${node.y}`).className =
          "path path-shortestPath";
      }, 10 * i);
    }
  };

  const visualizePath = () => {
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        setTimeout(() => {
          visualizeShortestPath(path);
        }, 20 * i);
      } else {
        const node = visitedNodes[i];
        if (node.x == m_StartNodeCol && node.y == m_StartNodeRow) continue;
        if (node.x == m_EndNodeCol && node.y == m_EndNodeRow) continue;
        setTimeout(() => {
          document.getElementById(`path-${node.x}-${node.y}`).className =
            "path path-visitedNodes";
        }, 20 * i);
      }
    }
  };
  return (
    <div className="PathFindingViz">
      <h1>Pathfinding Visualizer</h1>
      <button onClick={visualize}> Visualize Path </button>
      <button onClick={resetGrid}> Reset Grid </button>
      <select value={algoOption} onChange={handleAlgoSelect}>
        <option value="A*">A*</option>
      </select>
      <div>{displayGrid}</div>
    </div>
  );
};

export default PathFindingViz;
