import React, { useState } from "react";
 
const Buttons = ({setDataStructure, setShowButtons}) => {
 return (
   <div>  
     <button
       style={{
         marginTop: 50,
         marginLeft: 50,
         height: 50,
         width: 100,
         boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
         marginBottom: 50,
         transition: "0.3s",
       }}
       onClick={() => {
         setDataStructure("linkedList")
         setShowButtons(false)
       }}
     >
       Linked List
     </button>
     <button
       animated="ease"
       style={{
         marginTop: 50,
         marginLeft: 50,
         height: 50,
         width: 100,
         boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
         marginBottom: 50,
         transition: "0.3s",
       }}
       onClick={() => {
         setDataStructure("stack")
         setShowButtons(false)
       }}
     >
       Stack
     </button>
     <button
       animated="ease"
       style={{
         marginTop: 50,
         marginLeft: 50,
         height: 50,
         width: 100,
         boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
         marginBottom: 50,
         transition: "0.3s",
       }}
       onClick={() => {
         setDataStructure("queue")
         setShowButtons(false)
       }}
     >
       Queue
     </button>
     <button
       animated="ease"
       style={{
         marginTop: 50,
         marginLeft: 50,
         height: 50,
         width: 110,
         boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
         marginBottom: 50,
         transition: "0.3s",
       }}
       onClick={() => {
         setDataStructure("binaryTree")
         setShowButtons(false)
       }}
     >
       Binary Trees
     </button>
     <button
       animated="ease"
       style={{
         marginTop: 50,
         marginLeft: 50,
         height: 50,
         width: 110,
         boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
         marginBottom: 50,
         transition: "0.3s",
       }}
       onClick={() => {
         setDataStructure("heap")
         setShowButtons(false)
       }}
     >
       Heap
     </button>
   </div>
 );
};
 
export default Buttons;
