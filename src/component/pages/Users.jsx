/*
This is just for testing purposes to check reflect the users for the get requests
*/
import React, { Component, useState } from "react";
import axios from 'axios'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/users/")
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }   
    render(){
        return (
            <div>
                I think we should get CORS enabled on the server side
                <a href="https://enable-cors.org/server.html" style={{color:"black"}}>This is a good source I found that can help you Dario</a>
            </div>
        )
    }
}

export default Users;