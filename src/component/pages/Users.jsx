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
                YEP
            </div>
        )
    }
}

export default Users;