import React from "react";
import axios from "axios";
import Queue from "../visualizer/LearnQueue";
import { connect } from "react-redux";
import { enroll_post_instance } from "../../networking/axios";
class QueuePage extends React.Component {
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
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[15].description] });
        this.setState({ title: [...this.state.title, response.data[15].title] });
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[16].description] });
        this.setState({ title: [...this.state.title, response.data[16].title] });
        this.setState({ courseDesc: [...this.state.courseDesc, response.data[17].description] });
        this.setState({ title: [...this.state.title, response.data[17].title] });
        // console.table(this.state.courseDesc);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Enqueue() {
    this.Queue.Enqueue(Math.floor(Math.random() * 100));
  }

  Dequeue() {
    this.Queue.Dequeue();
  }
  enroll_user({
    username: { value: username },
    authToken: { value: authToken },
  }) {
    if (authToken) {
      enroll_post_instance()
        .post("/enrollments/", {
          username,
          title: "Queue",
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
          <h1>Queues</h1>
        </header>
        <main className="shell-body">
          <Queue ref={(Queue) => (this.Queue = Queue)}></Queue>
        </main>
        <main className="shell-bodyII">
          <h2>{this.state.title[0]}</h2>
          <p>
            {this.state.courseDesc[0]}
          </p>
          <hr></hr>
          <h2>{this.state.title[1]}</h2>
          <p>
            {this.state.courseDesc[1]}
            <br></br>
            <button onClick={() => this.Enqueue()}>
              {" "}
              Click here to Enqueue{" "}
            </button>
          </p>
          <hr></hr>
          <h2>{this.state.title[2]}</h2>
          <p>
            {this.state.courseDesc[2]}
            <br></br>
            <button onClick={() => this.Dequeue()}>
              {" "}
              Click here to Dequeue{" "}
            </button>
          </p>
          <hr></hr>
          <h2>Leetcode Challenges</h2>
          <ul>
            Leetcode Easy:
            <li>
              <a
                href="https://leetcode.com/problems/number-of-recent-calls/"
                target="_blank"
              >
                Number of Recent Calls
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/"
                target="_blank"
              >
                Number of Students Unable to Eat Lunch
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/time-needed-to-buy-tickets/"
                target="_blank"
              >
                Time Needed to Buy Tickets
              </a>
            </li>
            Leetcode Medium:
            <li>
              <a
                href="https://leetcode.com/problems/reveal-cards-in-increasing-order/"
                target="_blank"
              >
                Reveal Cards In Increasing Order
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/find-the-winner-of-the-circular-game/"
                target="_blank"
              >
                Find the Winner of the Circular Game
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/flatten-nested-list-iterator/"
                target="_blank"
              >
                Flatten Nested List Iterator
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/design-front-middle-back-queue/"
                target="_blank"
              >
                Design Front Middle Back Queue
              </a>
            </li>
            Leetcode Hard:
            <li>
              <a
                href="https://leetcode.com/problems/constrained-subsequence-sum/"
                target="_blank"
              >
                Constrained Subsequence Sum
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/"
                target="_blank"
              >
                Delivering Boxes from Storage to Ports
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

export default connect(mapStateToProps)(QueuePage);
