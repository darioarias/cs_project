import React from "react";
import "./PathNode.css";
const PathNode = ({ isStart, isEnd, row, col, isWall }) => {
  const classes = isStart
    ? "path-start"
    : isWall
    ? "path-wall"
    : isEnd
    ? "path-end"
    : "";
  return <div className={`path ${classes}`} id={`path-${row}-${col}`}></div>;
};

export default PathNode;
