import { default as SinglyLinkedList } from "../DSA/DataStructures/LinkedList/singlyLinkedList.js";
import react from "react";
import SinglyLinkedListNode from "./SinglyLinkedListNode.jsx";

class SinglyLinkedListComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      list: null,
    };

    this.getHead = this.getHead.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetList();
  }

  resetList() {
    let newlist = new SinglyLinkedList();
    this.setState({ list: newlist });
  }

  push() {
    this.state.list.push(this.state.value);
    this.forceUpdate();
  }

  append() {
    this.state.list.append(this.state.value);
    this.forceUpdate();
  }

  remove() {
    this.state.list.remove(Number(this.state.value));
    this.forceUpdate();
  }

  pop() {
    this.state.list.pop();
    this.forceUpdate();
  }

  search() {
    this.state.list.search(this.state.value);
    this.forceUpdate();
  }

  removeLast() {
    this.state.list.removeLast();
    this.forceUpdate();
  }

  getHead() {
    if (this.state.list != null) {
      return this.state.list.head;
    }
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  render() {
    let Nodes = () => {
      if (this.state.list !== null) {
        return (
          <>
            {this.state.list.toArr().map((node, index) => (
              <SinglyLinkedListNode
                key={index}
                data={node}
                index={index}
              ></SinglyLinkedListNode>
            ))}
          </>
        );
      }
    };
    return (
      <div>
        <button onClick={() => this.resetList()}>Reset List</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.push()}> Push Value </button>
          <button onClick={() => this.append()}> Append Value </button>
          <button onClick={() => this.remove()}> Remove at Index</button>
          <button onClick={() => this.pop()}> Pop Value</button>
          <button onClick={() => this.removeLast()}> Remove Last</button>
          <button onClick={() => this.search()}>Seacrh for Value</button>
        </div>

        <div
          className="jsavlist jsavautoresize jsavhorizontallist scroller"
          data-visible="true"
          data-nodegap="40"
          data-autoresize="true"
          style={{ padding: "10px", display: "flex", gap: "0px", alignItems: "flex-start"}}
        >
          {Nodes()}
        </div>
      </div>
    );
  }
}

export default SinglyLinkedListComponent;
