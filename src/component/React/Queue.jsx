import { default as Queue } from "../DSA/DataStructures/Queue/queue.js";
import react from "react";
import { QueueContainer } from "./styles.jsx";
import QueueNode from "./QueueNode.jsx";

class QueueComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      queue: null,
      animate: "",
      max: 5,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetQueue();
  }

  componentDidUpdate() {
    const { queue } = this.state;
    // if (this.state.animate == "Enqueue" && !queue.isEmpty()) { //one way to fix the error, check if the queue is empty, which means getElementById('0') will return nothing.
    if (this.state.animate == "Enqueue") {
      const element = document.getElementById("0");
      if (element) element.style.backgroundColor = "#FF0000"; // another way to fix the error, check to make sure that getElementById('0') returned something
    }
  }

  resetQueue() {
    // let newQueue = new Queue();
    this.setState({ queue: new Queue(null, this.state.max) });
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  Enqueue() {
    this.state.queue.enqueue(this.state.value);
    this.setState({ animate: "Enqueue" });
    this.forceUpdate();
  }

  Dequeue() {
    const { queue } = this.state;
    // this.state.queue.dequeue();
    queue.dequeue();
    this.forceUpdate();
  }
  render() {
    let Nodes = () => {
      if (this.state.queue !== null) {
        return (
          <>
            {this.state.queue.toArr().map((node, index) => (
              <QueueNode key={index} data={node} index={index}></QueueNode>
            ))}
          </>
        );
      }
    };
    return (
      <div>
        <button onClick={() => this.resetQueue()}>Reset Queue</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.Enqueue()}> Enqueue </button>
          <button onClick={() => this.Dequeue()}> Dequeue </button>
        </div>
        <QueueContainer>{Nodes()}</QueueContainer>
      </div>
    );
  }
}
export default QueueComponent;
