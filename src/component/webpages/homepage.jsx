import React, { useState } from "react";
import SinglyLinkedListComponent from "../React/SinglyLinkedList";
import BinaryTreeComponent from "../React/BinaryTree";
import QueueComponent from "../React/Queue";

const Home = () => {
  const [linkedList, setlinkedList] = useState(false);
  const [stack, setStack] = useState(false);
  const [queue, setQueue] = useState(false);
  const [binaryTrees, setbinaryTrees] = useState(false);

  const llFalse = () => {
    setlinkedList(true);
    setStack(false);
    setQueue(false);
    setbinaryTrees(false);
  };
  const stackFalse = () => {
    setlinkedList(false);
    setStack(true);
    setQueue(false);
    setbinaryTrees(false);
  };
  const queueFalse = () => {
    setlinkedList(false);
    setStack(false);
    setQueue(true);
    setbinaryTrees(false);
  };
  const binaryTFalse = () => {
    setlinkedList(false);
    setStack(false);
    setQueue(false);
    setbinaryTrees(true);
  };
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
        onClick={llFalse}
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
        onClick={stackFalse}
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
        onClick={queueFalse}
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
        onClick={binaryTFalse}
      >
        Binary Trees
      </button>
      {linkedList ? <SinglyLinkedListComponent /> : ""}
      {stack ? <p>Stack</p> : ""}
      {queue ? <QueueComponent /> : ""}
      {binaryTrees ? <BinaryTreeComponent /> : ""}
    </div>
  );
};

export default Home;
