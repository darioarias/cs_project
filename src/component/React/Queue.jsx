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
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetQueue();
  }

  resetQueue() {
    let newQueue = new Queue();
    this.setState({ queue: newQueue });
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  Enqueue() {
    this.state.queue.enqueue(this.state.value);
    this.forceUpdate();
  }

  Dequeue() {
    this.state.queue.dequeue();
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
