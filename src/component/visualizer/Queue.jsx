import { default as Queue } from "../DSA/DataStructures/Queue/queue.js";
import react from "react";
import { QueueContainer } from "./styles.jsx";
import QueueNode from "./QueueNode.jsx";
import Box from "@mui/material/Card";
import Learn from "../pages/Learn";
import { queueInsert } from "../../animations/animations";

class QueueComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      queue: null,
      animate: "",
      size: 0,
      max: 20,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidUpdate() {
    if (this.state.animate == "Enqueue") {
      const element = document.getElementById((this.state.size - 1).toString());
      if (element)
        element.animate([{ background: "#69b7eb" }], {
          duration: 1000,
        });
    }
  }

  componentDidMount() {
    this.resetQueue();
  }

  resetQueue() {
    // let newQueue = new Queue();
    this.setState({ queue: new Queue(null, this.state.max) });
    this.setState({ size: 0 });
    this.setState({ val: 0 });
    this.setState({ animate: ""});
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
    this.setState({ animate: "" });
  }

  Enqueue() {
    this.state.queue.enqueue(this.state.value);
    this.setState({ animate: "Enqueue" });
    let val = 1 + this.state.size;
    this.setState({ size: val });
    this.forceUpdate();
  }

  Dequeue() {    
    this.setState({ animate: "" });
    const { queue } = this.state;
    // this.state.queue.dequeue();
    const element = document.getElementById("0");
    if (element)
      element.animate([{ background: "#FF0000" }], {
        duration: 1000,
      });
    queue.dequeue();
    let val = this.state.size  - 1 ;
    if (val < 0)
      val = 0;
    this.setState({ size: val });
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                p: 10,
                m: 10,
                bgcolor: "#1976D2",
                borderRadius: 10,
              }}
            >
              <button onClick={() => this.resetQueue()}>Reset Queue</button>
              <div>
                <input value={this.state.value} onChange={this.onChangeValue} />
                <button onClick={() => this.Enqueue()}> Enqueue </button>
                <button onClick={() => this.Dequeue()}> Dequeue </button>
              </div>
            </Box>
            <QueueContainer>{Nodes()}</QueueContainer>
      </div>
    );
  }
}
export default QueueComponent;
