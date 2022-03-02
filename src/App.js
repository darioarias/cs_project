import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";
import SinglyLinkedListComponent from "./component/React/SinglyLinkedList";
import { DataStructures, Algorithms } from "./component/DSA/exports";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
  Stack: { Stack },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ls = new List();
    ls.append("0");
    ls.append("1");
    ls.append("2");
    ls.append("3");
    ls.append("4");
    console.log(ls.toArr()); // [SinglyLinkedListNode, etc]
    // const s = new Stack();
    // s.push("1");
    // s.push("2");
    // s.push("3");
    // s.push("4");

    // console.log(s.pop());
    // console.log(s.pop());
    // console.log(s.pop());
    // console.log(s.pop());

    // console.log(s.toString());

    // console.log(ls, ls.isEmpty() ? "LIST IS EMPTY" : "LIST IS NOT EMPTY");
    let n1 = new Node(1);
    let n2 = new Node(2);

    // n1.appendClass(["jsavnode", "jsavlistnode"]);
    // n2.appendClass(["jsavnode", "jsavlistnode"]);
    n1.appendClass("test1");
    n1.value = 20;

    return (
      <div>
        <Nav />
        <div
          dangerouslySetInnerHTML={{
            __html: n1.toString() + n2.toString(),
          }}
        />
        <SinglyLinkedListComponent></SinglyLinkedListComponent>
      </div>
    );
  }
}

export default App;
