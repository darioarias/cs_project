import LinkedListLearn from "./LinkedListLearn";
import BinaryTreeComponent from "../visualizer/BinaryTree";
import QueueComponent from "../visualizer/Queue";
import StackComponent from "../visualizer/Stack";
import HeapComponent from "../visualizer/Heap";
import React, {useState} from "react";

const ShowDataStructure = ({dataStructure}) => {
  const [goBack, setGoBack] = useState(false);
 return (
   <div>
       {dataStructure === "linkedList" && <LinkedListLearn goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "stack" && <StackComponent goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "binaryTree" && <BinaryTreeComponent goBack={goBack} setGoBack={setGoBack}/>}
       {dataStructure === "queue" && <QueueComponent goBack={goBack} setGoBack={setGoBack} />}
       {dataStructure === "heap" && <HeapComponent goBack={goBack} setGoBack={setGoBack} />}
   </div>
 );
};
 
export default ShowDataStructure;

