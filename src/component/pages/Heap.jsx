import React from "react";
import Heap from "../visualizer/LearnHeap";
import { connect } from "react-redux";
import { enroll_post_instance } from "../../networking/axios";
class Heappage extends React.Component {
  constructor(props) {
    super(props);
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
          <h2>What is a Heap</h2>
          <p>
            A heap is tree-based data structure that takes the form of a binary
            tree. The highest priority element will be at the top of the heap.
            To start click on the insert method. The above heap is a min-heap,
            where the lowest value will be at the top of the tree and the higher
            numbers will be lower down the tree. The max heap is another type of
            heap, where the highest value will be at the top of the tree and the
            lowest numbers will be at the bottom of the tree.
          </p>
          <hr></hr>
          <h2>Insert Method</h2>
          When a user inserts an element into the min-heap, the element will
          sift up until the parent is less than the element. In a max-heap, the
          element will sift up until the element is less than the parent. The
          above example is a min-heap, so the lowest value will be highest
          element in the tree.
          <p></p>
          <button onClick={() => this.Insert()}> Click here to Insert </button>
          <hr></hr>
          <h2>Remove Method</h2>
          <p>
            The Remove Method is a method for the heap that allows the removal
            of the top-most element from the heap.
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
