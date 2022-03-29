import SinglyLinkedListComponent from "../React/SinglyLinkedList";
import BinaryTreeComponent from "../React/BinaryTree";
import QueueComponent from "../React/Queue";
import StackComponent from "../React/Stack";
import HeapComponent from "../React/Heap";
import React, {useState} from "react"
 
const ShowDataStructure = ({dataStructure}) => {
  const [goBack, setGoBack] = useState(false);
 return (
   <div>
       {dataStructure === "linkedList" && <SinglyLinkedListComponent goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "stack" && <StackComponent goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "binaryTree" && <BinaryTreeComponent goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "queue" && <QueueComponent goBack={goBack} setGoBack={setGoBack} />}
       {dataStructure === "heap" && <HeapComponent goBack={goBack} setGoBack={setGoBack} />}
   </div>
 );
};
 
export default ShowDataStructure;
