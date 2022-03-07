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

  search(){
    this.state.list.search((this.state.value));
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

  tests(pol){
    let listNodes = [];
    let output = []
    pol.map((node, index) => (listNodes.push(<SinglyLinkedListNode key={index} data={node}></SinglyLinkedListNode>)))
    for (let i = 0; i < listNodes.length; i++){
      output.push(listNodes[i])
      if (i + 1 < listNodes.length)
      output.push(<div class="arrow-1"></div>)
    }
    return (output)
  }

  render() {
    let Nodes = () => {
      if (this.state.list !== null) {     
        return (
          <>
            {this.tests(this.state.list.toArr())}
          </>
        );
      }
    }
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
          style={{padding: "40px", display:"flex", gap:"50px"}}
        >
          {Nodes()}
        </div>
      </div>
    );
  }
}

export default SinglyLinkedListComponent;
