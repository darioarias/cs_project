/*
This is just for testing purposes to check reflect the users for the get requests
*/
import React, { Component, useState } from "react";

class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        console.log("Yes")
    }   

    render(){
        return (
            <div className="userProfile">
                <div className="left-content column">
                    <h5>Username via get request</h5>
                    <h6>Real name optional</h6>
                    <button>Settings another page for this?</button>
                </div>
                <div className="right-content column">
                    <div className="spacer"></div>
                    <h4>Courses Completed</h4>
                    <h4>Challenges Completed</h4>
                </div>
            </div>
        )
    }
}

export default UserProfile;