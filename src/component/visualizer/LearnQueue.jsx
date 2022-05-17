import { default as Queue } from "../DSA/DataStructures/Queue/queue.js";
import react from "react";
import { QueueContainer } from "./styles.jsx";
import QueueNode from "./QueueNode.jsx";
import { queueInsert } from "../../animations/animations";

class QueueComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      queue: new Queue(null, 20),
      animate: "",
      size: 0,
      max: 20,
    };
    for (let i = 0; i < 5; i++) {
      this.state.queue.enqueue(i);
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidUpdate() {
    if (this.state.animate === "Enqueue") {
      const element = document.getElementById((this.state.size - 1).toString());
      if (element)
        element.animate([{ background: "#69b7eb" }], {
          duration: 1000,
        });
    }
  }

  // componentDidMount() {
  //   this.resetQueue();
  // }

  resetQueue() {
    // let newQueue = new Queue();
    this.setState({ queue: new Queue(null, this.state.max) });
    this.setState({ size: 0 });
    this.setState({ val: 0 });
    this.setState({ animate: "" });
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
    this.setState({ animate: "" });
  }

  // learning portion uses restricted inputs from 0 to 100. pushedvalue is a flag
  Enqueue(pushedValue = -1) {
    let capacity = 13 - this.getLength(); // the limit to the queue is 20 for the learn
    // If user enqueue in learning, exceeds out max size of 20 then alert user
    if (capacity - 1 < 0) {
      alert("For our example, the max size is 13 nodes");
      pushedValue = -1;
      return;
    }
    this.state.queue.enqueue(pushedValue);
    let val = 1 + this.state.size;
    this.setState({ size: val });
    this.setState({ animate: "Enqueue" });
    pushedValue = -1;
    this.forceUpdate();
  }

  Dequeue() {
    if (this.getLength() === 0) {
      alert("There are no elements!");
      return;
    }
    this.setState({ animate: "" });
    const { queue } = this.state;
    // this.state.queue.dequeue();
    const element = document.getElementById("0");
    if (element)
      element.animate([{ background: "#FF0000" }], {
        duration: 1000,
      });
    queue.dequeue();
    let val = this.state.size - 1;
    if (val < 0) val = 0;
    this.setState({ size: val });
    this.forceUpdate();
  }

  getLength() {
    return this.state.queue.getLength();
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
        <QueueContainer>{Nodes()}</QueueContainer>
      </div>
    );
  }
}
export default QueueComponent;
