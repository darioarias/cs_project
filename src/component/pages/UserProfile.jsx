/*
This is just for testing purposes to check reflect the users for the get requests
*/
import axios from "axios";
import React, { Component, useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Uimage from "../../Images/abstract-user.png";
import { color } from "@mui/system";

import { connect } from "react-redux";
import {
  user_get_instance,
  attempt_post_instance,
} from "../../networking/axios";
import { Navigate } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      challenges: [],
      user: [],
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
    //   .then((response) => {
    //     // console.log(response);
    //     this.setState({ courses: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    axios
      .get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/challenges/")
      .then((response) => {
        // console.log(response);
        this.setState({ challenges: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    if (this.props.authToken.value)
      user_get_instance() //${this.props.username.value}
        .get(`/users/${this.props.username.value}`)
        .then(({ data }) => {
          this.setState({ user: data[0] });
          //   this.setState({ courses: data[0] });
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    const { courses } = this.state;
    const { challenges } = this.state;
    const { user } = this.state;
    // console.log(user.courses);
    console.log(user.challenges ? user.challenges.length : undefined);
    if (!this.props.authToken.value) return <Navigate to="/" />;
    else
      return (
        <div className="userProfile">
          <Card
            className="left-content column"
            sx={{ boxShadow: "0px 0px 3px 3px lightgrey" }}
          >
            <CardMedia
              component="img"
              image={Uimage}
              height="auto"
              width="auto"
              alt="username"
            ></CardMedia>
            {/* <h5>Username via get request</h5> */}
            <h5>{user.username}</h5>
            <h6>
              {user.first_name} {user.last_name}
            </h6>
            {/* <button>Settings another page for this?</button> */}
          </Card>
          <div
            className="right-content column"
            sx={{ padding: 1, fontfamily: "Raleway" }}
          >
            <div className="spacer"></div>
            <Card
              sx={{
                boxShadow: "0px 0px 3px 3px lightgrey",
                padding: 1,
                fontfamily: "Raleway",
                marginBottom: 2,
              }}
            >
              <h4> Enrolled Courses</h4>
              <ol sx={{ paddingTop: 2 }}>
                {user.username
                  ? user.courses.map(({ start_date, title }) => (
                      <li key={title}>
                        {title} - Enrolled on: {start_date}
                      </li>
                    ))
                  : null}
              </ol>
            </Card>
            <Card
              sx={{
                boxShadow: "0px 0px 3px 3px lightgrey",
                padding: 1,
                fontfamily: "Raleway",
              }}
            >
              <h4>Challenges</h4>
              <ol>
                {user.challenges && user.challenges.length > 0
                  ? user.challenges.map((challenge) => {
                      return <li key={challenge.title}>{challenge.title} </li>;
                    })
                  : null}
              </ol>
            </Card>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  authToken: state.authToken,
});

export default connect(mapStateToProps)(UserProfile);
