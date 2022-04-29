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
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{console.log(error)})
    }   
    render(){
        const {posts} =this.state
        return (
            <div>
                Users
                {
                    posts.length ?
                    posts.map(post => <div key ={post.id}>{post.username} {post.email}</div>):
                    null
                } 
            </div>
        )
    }
}

export default Users;