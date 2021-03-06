import React from "react";
import SinglyLinkedList from "../visualizer/LearnSinglyLinkedList";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  enroll_post_instance,
  attempt_post_instance,
  challenges_get_instance,
} from "../../networking/axios";
//This class is the parent to the Singly Linked List.
//The class will call methods of the singly linked list components via refs

class LinkedListpage extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: 0,
      title: [],
      courseDesc: [],
      username: "",
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
          courseDesc: [...this.state.courseDesc, response.data[4].description],
        });
        this.setState({ title: [...this.state.title, response.data[4].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[5].description],
        });
        this.setState({ title: [...this.state.title, response.data[5].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[6].description],
        });
        this.setState({ title: [...this.state.title, response.data[6].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[7].description],
        });
        this.setState({ title: [...this.state.title, response.data[7].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[8].description],
        });
        this.setState({ title: [...this.state.title, response.data[8].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[9].description],
        });
        this.setState({ title: [...this.state.title, response.data[9].title] });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[10].description],
        });
        this.setState({
          title: [...this.state.title, response.data[10].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[11].description],
        });
        this.setState({
          title: [...this.state.title, response.data[11].title],
        });

        // console.table(this.state.courseDesc);
      })
      .catch((error) => {
        console.log(error);
      });

    challenges_get_instance()
      .get("/challenges/820135")
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
    this.SinglyLinkedList.push(randomValuePushed);
  }

  append(randomValueAppended) {
    this.SinglyLinkedList.append(randomValueAppended);
  }

  remove() {
    if (this.state.value < this.SinglyLinkedList.getLength())
      this.SinglyLinkedList.remove(this.state.value);
    else {
      alert("Pick a number within the index of the linked list");
    }
  }

  removeLast() {
    this.SinglyLinkedList.removeLast();
  }

  pop() {
    this.SinglyLinkedList.pop();
  }

  getHead() {
    let headVal = this.SinglyLinkedList.getHead();
    if (headVal >= 0) {
      alert(`The head node has value ${headVal}`);
      return;
    }
    alert("There are no nodes in the linked list");
  }

  getTail() {
    let tailVal = this.SinglyLinkedList.getTail();
    if (this.SinglyLinkedList.getLength() == 1) {
      alert(`The node has value ${tailVal}. The node is a tail and head node`);
      return;
    }
    if (tailVal >= 0) {
      alert(`The tail node has value ${tailVal}`);
      return;
    }
    alert("There are no nodes in the linked list");
  }

  onChangeValue(data) {
    this.setState({ value: Number(data.target.value) });
  }

  enroll_user({
    username: { value: username },
    authToken: { value: authToken },
  }) {
    if (authToken) {
      enroll_post_instance()
        .post("/enrollments/", {
          username,
          title: "Linked Lists",
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
    // console.table(this.state.courseDesc)
    const { easy, medium, hard } = this.state;
    // console.log(this.state);

    return (
      <div className="shell learning-text">
        <header className="shell-header">
          <h1>Linked List</h1>
        </header>
        <main className="shell-body ">
          <SinglyLinkedList
            ref={(SinglyLinkedList) =>
              (this.SinglyLinkedList = SinglyLinkedList)
            }
          ></SinglyLinkedList>
        </main>
        <main className="shell-bodyII">
          <div>
            <h2>{this.state.title[0]}</h2>
            <p>{this.state.courseDesc[0]}</p>
            <hr></hr>
            <h2>{this.state.title[1]}</h2>
            <p>{this.state.courseDesc[1]}</p>
            <button onClick={() => this.getHead()}>
              Check out the head node
            </button>
            <hr></hr>
            <h2>{this.state.title[2]}</h2>
            <p>{this.state.courseDesc[2]}</p>
            <button onClick={() => this.getTail()}>
              Check out the tail node
            </button>
            <hr></hr>
            <h2>{this.state.title[3]}</h2>
            <p>{this.state.courseDesc[3]}</p>
            <button onClick={() => this.push(Math.floor(Math.random() * 100))}>
              Click here to try the push method
            </button>
            <hr></hr>
            <h2>{this.state.title[4]}</h2>
            <p>{this.state.courseDesc[4]}</p>
            <button
              onClick={() => this.append(Math.floor(Math.random() * 100))}
            >
              Click here to try the append method
            </button>
            <hr></hr>
            <h2>{this.state.title[5]}</h2>
            <p>{this.state.courseDesc[5]}</p>
            <button onClick={() => this.removeLast()}>
              Click here to try the append method
            </button>
            <hr></hr>
            <h2>{this.state.title[6]}</h2>
            <p>{this.state.courseDesc[6]}</p>
            <input value={this.state.value} onChange={this.onChangeValue} />
            <button onClick={() => this.remove()}>
              Click here to try the remove method
            </button>
            <hr></hr>
            <h2>{this.state.title[7]}</h2>
            <p>{this.state.courseDesc[7]}</p>
            <button onClick={() => this.pop()}>
              Click here to try the pop method
            </button>
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
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  authToken: state.authToken,
});

export default connect(mapStateToProps)(LinkedListpage);

// user.username
//   ? user.courses.map(({ start_date, title }) => (
//       <li key={title}>
//         {title} - Enrolled on: {start_date}
//       </li>
//     ))
//   : null;

// <ul>
// Leetcode Easy:
// <li onClick={this.challengeInteraction} id="123">
//   <a
//     href="https://leetcode.com/problems/delete-node-in-a-linked-list/"
//     target="_blank"
//     id="123"
//   >
//     Delete a node in a linked list
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/reverse-linked-list/"
//     target="_blank"
//   >
//     Reverse Linked List
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/merge-two-sorted-lists/"
//     target="_blank"
//   >
//     Merge Two Sorted Lists
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/linked-list-cycle/"
//     target="_blank"
//   >
//     {" "}
//     Linked List Cycle
//   </a>
// </li>
// Leetcode Medium:
// <li>
//   <a
//     href="https://leetcode.com/problems/odd-even-linked-list/"
//     target="_blank"
//   >
//     Odd Even Linked List
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/swap-nodes-in-pairs/"
//     target="_blank"
//   >
//     Swap Nodes in Pairs
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/add-two-numbers/"
//     target="_blank"
//   >
//     Add Two Numbers
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
//     target="_blank"
//   >
//     Remove Nth Node From End of List
//   </a>
// </li>
// <li>
//   <a
//     href="https://leetcode.com/problems/rotate-list/"
//     target="_blank"
//   >
//     Rotate List
//   </a>
// </li>
// Leetcode Hard:
// <li>
//   <a
//     href="https://leetcode.com/problems/merge-k-sorted-lists/"
//     target="_blank"
//   >
//     Merge k Sorted Lists
//   </a>
// </li>
// </ul>
