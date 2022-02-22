import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";

import { DataStructures, Algorithms } from "./component/DSA/exports";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ls = new List();
    // console.log(ls.node(0));
    ls.push("1");
    ls.append("2");
    // let node = new Node("Dario");
    ls.append("3");
    // ls.insert(ls.node(2), 4);
    // ls.append("Arias");
    // ls.push("HELLO");
    // ls.append(node);
    // console.log(ls.removeLast());
    // console.log(ls.removeLast());
    // console.log(ls.removeLast());
    // console.log(ls.removeLast());
    console.log(ls.remove(2));
    console.log(ls.remove(1));
    console.log(ls.remove(0));
    console.log(ls.toString());

    console.log(ls, ls.isEmpty() ? "LIST IS EMPTY" : "LIST IS NOT EMPTY");
    let n1 = new Node(1);
    let n2 = new Node(2);

    n1.value = 20;

    return (
      <div>
        <Nav />
        <div
          dangerouslySetInnerHTML={{
            __html: n1.toString(),
          }}
        />
      </div>
    );
  }
}

export default App;
