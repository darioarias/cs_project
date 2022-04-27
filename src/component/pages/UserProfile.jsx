/*
This is just for testing purposes to check reflect the users for the get requests
*/
import axios from 'axios';
import React, { Component, useState } from "react";

class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            courses: [],
            challenges: []
        }
    }

    componentDidMount(){
        axios.get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
        .then(response=>{
            console.log(response)
            this.setState({courses:response.data})
        })
        .catch(error=>{console.log(error)})    

        axios.get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/challenges/")
        .then(response=>{
            console.log(response)
            this.setState({challenges:response.data})
        })
        .catch(error=>{console.log(error)})    
    }   

    render(){
        const {courses} =this.state
        const {challenges} = this.state
        return (
            <div className="userProfile">
                <div className="left-content column">
                    <h5>Username via get request</h5>
                    <h6>Real name optional</h6>
                    <button>Settings another page for this?</button>
                </div>
                <div className="right-content column">
                    <div className="spacer"></div>
                    <h4>Courses</h4>
                    <ol>
                        {
                            courses.length ?
                            courses.map(course => <li key ={course.id}>{course.title}: {course.description} </li>):
                            null
                        }
                    </ol>
                    <h4>Challenges</h4>
                    <ol>
                        {
                            challenges.length ?
                            challenges.map(challenge => <li key ={challenge.id}>{challenge.title} </li>):
                            null
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default UserProfile;