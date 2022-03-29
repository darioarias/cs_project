import { default as Queue } from "../DSA/DataStructures/Queue/queue.js";
import react from "react";
import { QueueContainer } from "./styles.jsx";
import QueueNode from "./QueueNode.jsx";
import Box from '@mui/material/Card';
import Learn from '../pages/Learn';


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
    this.goBackHandler = this.goBackHandler.bind(this);
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
  goBackHandler() {
    this.props.setGoBack(true)
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
        {
          !this.props.goBack ?
          (<>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              p: 10,
              m: 10,
              bgcolor: '#1976D2',
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
          <button onClick={this.goBackHandler}>Return</button>
          </>
          ) : <Learn/>}
      </div>
    );
  }
}
export default QueueComponent;
