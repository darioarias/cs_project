import { default as Stack } from "../DSA/DataStructures/Stack/stack.js";
import react from "react";
import StackNode from "./StackNode";
class StackComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      list: null,
      max: 5,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetList();
  }

  resetList() {
    // let newList = new Stack(null, this.state.max);
    this.setState({ list: new Stack(null, this.state.max) });
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  push() {
    this.state.list.push(this.state.value);
    this.forceUpdate();
  }

  pop() {
    this.state.list.pop();
    this.forceUpdate();
  }

  peek() {
    console.log(this.state.list.peek());
    this.forceUpdate();
  }

  outputting(stackNodes) {
    let listStackNodes = [];
    let output = [];
    stackNodes.map((node, index) =>
      listStackNodes.push(<StackNode key={index} data={node}></StackNode>)
    );
    for (let i = 0; i < listStackNodes.length; i++) {
      output.push(listStackNodes[i]);
    }
    return output;
  }

  render() {
    let Nodes = () => {
      if (this.state.list !== null) {
        return <>{this.outputting(this.state.list.toArr())}</>;
      }
    };
    return (
      <div>
        <button onClick={() => this.resetList()}> Reset List</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.push()}>Push Value</button>
          <button onClick={() => this.pop()}>Pop Value</button>
          <button onClick={() => this.peek()}>Peek Value</button>
        </div>
        <div
          className="jsavlist jsavautoresize jsavverticallist vertical"
          data-visible="true"
          data-nodegap="40"
          data-autoresize="true"
          style={{
            padding: "10px",
            display: "flex",
            gap: "0px",
            alignItems: "flex-start",
            position: "static",
            display: "block",
            maxWidth: "10%",
            margin: "auto",
          }}
        >
          <div className="verticalNodes">Top of Stack</div>
          {Nodes()}
          <div className="verticalNodes">Bottom of Stack</div>
        </div>
      </div>
    );
  }
}

export default StackComponent;
