import React from "react";
import Heap from "../visualizer/LearnHeap";
import axios from "axios";
import { connect } from "react-redux";
import {
  enroll_post_instance,
  challenges_get_instance,
  attempt_post_instance,
} from "../../networking/axios";

class Heappage extends React.Component {
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
          courseDesc: [...this.state.courseDesc, response.data[18].description],
        });
        this.setState({
          title: [...this.state.title, response.data[18].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[19].description],
        });
        this.setState({
          title: [...this.state.title, response.data[19].title],
        });
        this.setState({
          courseDesc: [...this.state.courseDesc, response.data[20].description],
        });
        this.setState({
          title: [...this.state.title, response.data[20].title],
        });
        // console.table(this.state.courseDesc);
      })
      .catch((error) => {
        console.log(error);
      });

    challenges_get_instance()
      .get("/challenges/820139")
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
          <h1>Heaps</h1>
        </header>
        <main className="shell-body">
          <Heap ref={(Heap) => (this.Heap = Heap)}></Heap>
        </main>
        <main className="shell-bodyII">
          <h2>{this.state.title[0]}</h2>
          <p>{this.state.courseDesc[0]}</p>
          <hr></hr>
          <h2>{this.state.title[1]}</h2>
          {this.state.courseDesc[1]}
          <p></p>
          <button onClick={() => this.Insert()}> Click here to Insert </button>
          <hr></hr>
          <h2>{this.state.title[2]}</h2>
          <p>{this.state.courseDesc[2]}</p>
          <button onClick={() => this.Remove()}> Click here to Remove </button>
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

export default connect(mapStateToProps)(Heappage);
