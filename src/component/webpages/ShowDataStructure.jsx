import React, { useState } from "react";
import SinglyLinkedListComponent from "../React/SinglyLinkedList";
import BinaryTreeComponent from "../React/BinaryTree";
import QueueComponent from "../React/Queue";
import StackComponent from "../React/Stack";
import HeapComponent from "../React/Heap";
 
const ShowDataStructure = ({dataStructure}) => {
 return (
   <div>
       {dataStructure === "linkedList" && <SinglyLinkedListComponent/>}
       {dataStructure === "stack" && <StackComponent/>}
       {dataStructure === "binaryTree" && <BinaryTreeComponent/>}
       {dataStructure === "queue" && <QueueComponent/>}
       {dataStructure === "heap" && <HeapComponent/>}
   </div>
 );
};
 
export default ShowDataStructure;
