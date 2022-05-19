/*
This is just for testing purposes to check reflect the users for the get requests
*/
import axios from 'axios';
import React, { Component, useState } from "react";
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import Uimage from "../../Images/abstract-user.png";
import { color } from '@mui/system';



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
                <Card className="left-content column" sx={{boxShadow: "0px 0px 3px 3px lightgrey"}}>
                <CardMedia component="img" image={Uimage} height="auto" width = "auto" alt='username'></CardMedia>
                    <h5>Username via get request</h5>
                    <h6>Real name optional</h6>
                    {/* <button>Settings another page for this?</button> */}
                </Card>
                <div className="right-content column" sx={{padding: 1, fontfamily:'Raleway'}}>
                    <div className="spacer"></div>
                    <Card sx={{boxShadow: "0px 0px 3px 3px lightgrey", padding: 1, fontfamily:'Raleway', marginBottom: 2}}>
                    <h4> Courses</h4>
                    <ol sx={{paddingTop: 2}}>
                        {
                            courses.length ?
                            courses.map(course => <li key ={course.id}>{course.title}: {course.description} </li>):
                            null
                        }
                    </ol>
                    </Card>
                    <Card sx={{boxShadow: "0px 0px 3px 3px lightgrey", padding: 1, fontfamily:'Raleway'}}>
                    <h4> Challenges</h4>
                    <ol>
                        {
                            challenges.length ?
                            challenges.map(challenge => <li key ={challenge.id}>{challenge.title} </li>):
                            null
                        }
                    </ol>
                    </Card>
                </div>
            </div>
        )
    }
}

export default UserProfile;
