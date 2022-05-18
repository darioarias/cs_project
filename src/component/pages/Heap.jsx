import React from "react";
import Heap from "../visualizer/LearnHeap";
import axios from "axios";
import { connect } from "react-redux";
import { enroll_post_instance } from "../../networking/axios";

class Heappage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [], 
      courseDesc: []
    }
  }

  componentDidMount() {
    axios
      .get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
      .then((response) => {
        // console.log(response);
        // for now this is static prob use to store data from api, couldnt figure out a better way
        //courses shouldnt be deleted so the static aspect is fine
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[18].description] });
        this.setState({ title: [...this.state.title, response.data[18].title] });
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[19].description] });
        this.setState({ title: [...this.state.title, response.data[19].title] });
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[20].description] });
        this.setState({ title: [...this.state.title, response.data[20].title] });
        // console.table(this.state.courseDesc);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Insert() {
    this.Heap.insert(Math.floor(Math.random() * 100));
  }

  Remove() {
    this.Heap.remove();
  }
  enroll_user({
    username: { value: username },
    authToken: { value: authToken },
  }) {
    if (authToken) {
      enroll_post_instance()
        .post("/enrollments/", {
          username,
          title: "Heaps",
        })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

      console.log("user is signed in: proceed to add them to this course");
      return;
    }
    console.log("user not signed in");
  }
  render() {
    this.enroll_user(this.props);
    return (
      <div className="shell">
        <header className="shell-header">
          <h1>Heaps</h1>
        </header>
        <main className="shell-body">
          <Heap ref={(Heap) => (this.Heap = Heap)}></Heap>
        </main>
        <main className="shell-bodyII">
          <h2>{this.state.title[0]}</h2>
          <p>
            {this.state.courseDesc[0]}
          </p>
          <hr></hr>
          <h2>{this.state.title[1]}</h2>
            {this.state.courseDesc[1]}
          <p></p>
          <button onClick={() => this.Insert()}> Click here to Insert </button>
          <hr></hr>
          <h2>{this.state.title[2]}</h2>
          <p>
            {this.state.courseDesc[2]}
          </p>
          <button onClick={() => this.Remove()}> Click here to Remove </button>
          <hr></hr>
          <h2>Leetcode Challenges</h2>
          <ul>
            Leetcode Easy:
            <li>
              <a
                href="https://leetcode.com/problems/kth-largest-element-in-a-stream/"
                target="_blank"
              >
                Kth Largest Element in a Stream
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"
                target="_blank"
              >
                Largest Number After Digit Swaps by Parity
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/relative-ranks/"
                target="_blank"
              >
                Relative Ranks
              </a>
            </li>
            Leetcode Medium:
            <li>
              <a
                href="https://leetcode.com/problems/reduce-array-size-to-the-half/"
                target="_blank"
              >
                Reduce Array Size to The Half
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/sort-characters-by-frequency/"
                target="_blank"
              >
                Sort Characters By Frequency
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/top-k-frequent-elements/"
                target="_blank"
              >
                Top K Frequent Elements
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/kth-largest-element-in-an-array/"
                target="_blank"
              >
                Kth Largest Element in an Array
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/longest-happy-string/"
                target="_blank"
              >
                Longest Happy String
              </a>
            </li>
            Leetcode Hard:
            <li>
              <a
                href="https://leetcode.com/problems/sequentially-ordinal-rank-tracker/"
                target="_blank"
              >
                Sequentially Ordinal Rank Tracker
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/"
                target="_blank"
              >
                Find the Kth Smallest Sum of a Matrix With Sorted Rows
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/swim-in-rising-water/"
                target="_blank"
              >
                Swim in Rising Water
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/k-th-smallest-prime-fraction/"
                target="_blank"
              >
                K-th Smallest Prime Fraction
              </a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.username,
  authToken: state.authToken,
});

export default connect(mapStateToProps)(Heappage);
