import React, { useState, useEffect } from "react";
import PathfindingViz from '../visualizer/PathFindingViz/Pathfind'
import LinkedListComponent from "../visualizer/SinglyLinkedList";
import BinaryTreeComponent from "../visualizer/BinaryTree";
import QueueComponent from "../visualizer/Queue";
import StackComponent from "../visualizer/Stack";
import HeapComponent from "../visualizer/Heap";

const Sandbox = () => {
  const [option, setOption] = useState("PathFinding");

  const handleOptionSelect = (e) => {
    setOption(e.target.value);
  };

  const renderSwitch = () =>{
    switch(option) {
      case "PathFinding":
        return (<PathfindingViz></PathfindingViz>);
      case "LinkedList":
        return (<LinkedListComponent></LinkedListComponent>);
      case "Queue":
        return (<QueueComponent></QueueComponent>);
      case "Stack":
        return(<StackComponent></StackComponent>);
      case "Heap":
        return(<HeapComponent></HeapComponent>);
    }
  }

 return (
   <div>
     <h2>Sandbox</h2>
     <select value={option} onChange={handleOptionSelect}>
          <option value="PathFinding">PathFinding</option>
          <option value="LinkedList">LinkedList</option>
          <option value="Queue">Queue</option>
          <option value="Stack">Stack</option>
          <option value="Heap">Heap</option>
      </select>
     <div>
       {renderSwitch()}
     </div>
   </div>
 );
};
 
export default Sandbox;
