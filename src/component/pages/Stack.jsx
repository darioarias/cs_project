import React from "react";
import Stack from "../visualizer/LearnStack";
import axios from "axios";
import { connect } from "react-redux";
import {
  enroll_post_instance,
  challenges_get_instance,
  attempt_post_instance,
} from "../../networking/axios";
class StackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      courseDesc: [],
      easy: [],
      medium: [],
      hard: [],
    };
    this.challengeInteraction = this.challengeInteraction.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
      .then((response) => {
        // console.log(response);
        // for now this is static prob use to store data from api, couldnt figure out a better way
        //courses shouldnt be deleted so the static aspect is fine
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[12].description],
        });
        this.setState({
          title: [...this.state.title, response.data[12].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[13].description],
        });
        this.setState({
          title: [...this.state.title, response.data[13].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[14].description],
        });
        this.setState({
          title: [...this.state.title, response.data[14].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[15].description],
        });
        this.setState({
          title: [...this.state.title, response.data[15].title],
        });
        // console.table(this.state.courseDesc);
      })
      .catch((error) => {
        console.log(error);
      });

    challenges_get_instance()
      .get("/challenges/820137")
      .then(({ data }) => {
        // console.log(data);
        const easy = [],
          medium = [],
          hard = [];

        for (let record of data) {
          switch (record.level) {
            case 0:
              easy.push(record);
              break;
            case 1:
              medium.push(record);
              break;
            case 2:
              hard.push(record);
              break;
            default:
              console.log("unable to process course: ");
          }
        }
        this.setState({ easy: easy });
        this.setState({ medium: medium });
        this.setState({ hard: hard });
      })
      .catch((error) => console.log(error));

    this.enroll_user(this.props);
  }

  push(randomValuePushed) {
    this.Stack.push(randomValuePushed);
  }

  pop() {
    this.Stack.pop();
  }

  peek() {
    this.Stack.peek();
  }

  enroll_user({
    username: { value: username },
    authToken: { value: authToken },
  }) {
    if (authToken) {
      enroll_post_instance()
        .post("/enrollments/", {
          username,
          title: "Stack",
        })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

      console.log("user is signed in: proceed to add them to this course");
      return;
    }
    console.log("user not signed in");
  }

  challengeInteraction({ target }) {
    // event.preventDefault();
    // let target = event.target;
    // console.log(this);
    if (this.props.authToken.value) {
      console.log("adding attempt");
      //add attempt, or update attempt
      attempt_post_instance()
        .post("/attempts/", {
          username: this.props.username.value,
          challenge_id: target.id,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
      return;
    }
    console.log("skipping attempt");
    // console.log(event.target.id);
    return;
  }

  render() {
    const { easy, medium, hard } = this.state;

    return (
      <div className="shell">
        <header className="shell-header">
          <h1>Stacks</h1>
        </header>
        <main className="stack-shell-body">
          <Stack ref={(Stack) => (this.Stack = Stack)}></Stack>
        </main>
        <main className="stack-shell-bodyII">
          <h2>{this.state.title[0]}</h2>
          <p>{this.state.courseDesc[0]}</p>
          <hr></hr>
          <h2>{this.state.title[1]}</h2>
          <p>{this.state.courseDesc[1]}</p>
          <button onClick={() => this.push(Math.floor(Math.random() * 100))}>
            Push Value
          </button>
          <hr></hr>
          <h2>{this.state.title[2]}</h2>
          <p>{this.state.courseDesc[2]}</p>
          <button onClick={() => this.pop()}>
            Click here to try the pop method
          </button>
          <hr></hr>
          <h2>{this.state.title[3]}</h2>
          <p>{this.state.courseDesc[3]}</p>
          <button onClick={() => this.peek()}>Peek Value</button>
          <hr></hr>
          <h2>Leetcode Challenges</h2>
          <ul>
            Leetcode Easy:
            {easy.length > 0
              ? easy.map(({ id, course_id, title, url }) => {
                  return (
                    <li onClick={this.challengeInteraction} key={id}>
                      <a href={url} target="_blank" id={id}>
                        {title}
                      </a>
                    </li>
                  );
                })
              : null}
            Leetcode Medium:
            {medium.length > 0
              ? medium.map(({ id, course_id, title, url }) => {
                  return (
                    <li onClick={this.challengeInteraction} key={id}>
                      <a href={url} target="_blank" id={id}>
                        {title}
                      </a>
                    </li>
                  );
                })
              : null}
            Leetcode Hard:
            {hard.length > 0
              ? hard.map(({ id, course_id, title, url }) => {
                  return (
                    <li onClick={this.challengeInteraction} key={id}>
                      <a href={url} target="_blank" id={id}>
                        {title}
                      </a>
                    </li>
                  );
                })
              : null}
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

export default connect(mapStateToProps)(StackPage);

// <ul>
// Leetcode Easy:
// <li>
//   <a
//     href="https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"
//     target="_blank"
//   >
//     Maximum Nesting Depth of the Parentheses
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/remove-outermost-parentheses/"
//     target="_blank"
//   >
//     Remove Outermost Parentheses
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/increasing-order-search-tree/"
//     target="_blank"
//   >
//     Increasing Order Search Tree
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/build-an-array-with-stack-operations/"
//     target="_blank"
//   >
//     Build an Array With Stack Operations
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/min-stack/"
//     target="_blank"
//   >
//     Min Stack
//   </a>
// </li>
// Leetcode Medium:
// <li>
//   <a
//     href="https://leetcode.com/problems/design-a-stack-with-increment-operation/"
//     target="_blank"
//   >
//     Design a Stack With Increment Operation
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/design-browser-history/"
//     target="_blank"
//   >
//     Design Browser History
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/validate-stack-sequences/"
//     target="_blank"
//   >
//     Validate Stack Sequences
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"
//     target="_blank"
//   >
//     Minimum Remove to Make Valid Parentheses
//   </a>
// </li>
// Leetcode Hard:
// <li>
//   <a
//     href="https://leetcode.com/problems/number-of-visible-people-in-a-queue/"
//     target="_blank"
//   >
//     Number of Visible People in a Queue
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/"
//     target="_blank"
//   >
//     Minimum Number of Increments on Subarrays to Form a Target Array
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/brace-expansion-ii/"
//     target="_blank"
//   >
//     Brace Expansion II
//   </a>
// </li>
// </ul>
