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

  add() {
    this.state.tree.add(this.state.value);
    this.forceUpdate();
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
          <button onClick={() => this.add()}> Add Value </button>
        </div>
        <div className="BinaryTree">{Nodes()}</div>
      </div>
    );
  }
}
export default BinaryTreeComponent;
