import React, { Component } from 'react';
import axios from 'axios';
import UserModel from "../models/UserModel"

const url = `${process.env.REACT_APP_API}/users`

class Profile extends Component {
  state = {
    profile: {}
  }

  componentDidMount() {
    this.getUserProfile()
  }
  getUserProfile() {
    const currentUserId = localStorage.getItem('id')
    console.log(`This is currentUser in Profile.js: `, currentUserId)
    axios.get(`${url}/${currentUserId}`)
      .then(resp => {
        console.log(`THS IS THE RESP FROM axios: `, resp)
        this.setState({profile: resp.data.data});
      });
    // console.log(`THIS.PROPS.CURRENTUSER: `, this.props.currentUser)
    // fetch(`${url}/${this.props.currentUser}`)
    //   .then(resp => {
    //     console.log(`THIS IS RESP!!!!!: `, resp)
    //   })

  }

  render() {
    console.log(`This is props from Profile.js: `, this.props)
    console.log(`This is state from Profile.js: `, this.state)
    const profile = this.state.profile
    return (
        <div className="prof-wrapper">
            PROFILE
        </div>
    )
    }
}

export default Profile;
