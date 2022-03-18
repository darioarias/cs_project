import React, { useState } from "react";
import SinglyLinkedListComponent from "../React/SinglyLinkedList";
import BinaryTreeComponent from "../React/BinaryTree";
import QueueComponent from "../React/Queue";
import StackComponent from "../React/Stack";
 
const ShowDataStructure = ({dataStructure}) => {
 return (
   <div>
       {dataStructure === "linkedList" && <SinglyLinkedListComponent/>}
       {dataStructure === "stack" && <StackComponent/>}
       {dataStructure === "binaryTree" && <BinaryTreeComponent/>}
       {dataStructure === "queue" && <QueueComponent/>}
   </div>
 );
};
 
export default ShowDataStructure;
