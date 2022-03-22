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
    const bt = new BinaryTree();
    bt.add("Dario");
    bt.add("Arias");
    bt.add("Lopz");
    bt.add("Rosa");
    bt.add("Maria");
    bt.add("Lugo");
    bt.add("Rosario");

    console.log(bt.toArr());

    // const pq = new PriorityQueue("max", 10);
    // console.log(pq);
    //let vals = new Array(10).fill().map(() => Math.floor(Math.random() * 11));
    //const pq = PriorityQueue.build_queue(vals, 10);

    // vals.forEach((el) => pq.enqueue(el));

    //while (!pq.isEmpty()) console.log(pq.dequeue());

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
