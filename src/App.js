import React, { Component } from "react";
import "./App.css";
import Nav from "./component/webpages/Navbar";
import { DataStructures, Algorithms } from "./component/DSA/exports";
import Home from "./component/webpages/Home";
import BinarySearchTree from "./component/DSA/DataStructures/BinarySearchTree/binarySearchTree";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
  Stack: { Stack },
  Queue: { Queue },
  BinaryTree: { BinaryTree },
  BinarySearchTree: { BinarySearchTree: BST },
  AVLTree: { AVLTree },
  Heaps: { Heap },
  PriorityQueues: { PriorityQueue },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pq = PriorityQueue.build_queue([3, 2, 1], 2);
    console.log(pq);
    return (
      <div>
        <Nav />
        {/* <div className="container-fluid">
          <SinglyLinkedListComponent></SinglyLinkedListComponent>
        </div> */}
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
