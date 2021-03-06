import { default as BinaryTree } from "../DSA/DataStructures/BinaryTree/binaryTree.js";
import react from "react";
import TreeLevel from "./TreeNodes.jsx";

class BinaryTreeComponent extends react.Component {
    constructor(props) {
    super(props);

    this.state = {
      value: 0,
      tree: null,
    };
      
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetTree();
  }

  resetTree() {
    let newTree = new BinaryTree();
    this.setState({ tree: newTree });
  }
  
  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  setRoot() {
    this.state.tree.root = this.state.value;
    this.forceUpdate();
  }

  add() {
    this.state.tree.add(this.state.value);
    this.forceUpdate();
  }

  addLeft(){
      this.state.tree.addLeft(this.state.value)
  }

render() {
  let Nodes = () => {
    if (this.state.tree != null) {
      let LevelOrder = this.state.tree.toArr();
      return (
        <>
          {LevelOrder.map((subArray, Index) => (
            <TreeLevel key={Index} data={subArray} level={Index}></TreeLevel>
          ))}
        </>
      );
    }
  };
    return (
      <div>
        <button onClick={() => this.resetTree()}>Reset Tree</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.setRoot()}> Set Root </button>
          <button onClick={() => this.add()}> Add Value </button>
          <button onClick={() => this.addLeft()}> Add Left Value </button>
        </div>
        {Nodes()}
      </div>
    );
  }
}
export default BinaryTreeComponent;
