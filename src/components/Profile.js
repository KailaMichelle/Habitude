import React, { Component } from 'react';

const url = `${process.env.REACT_APP_API}/users`

class Profile extends Component {
  state = {
    profile: {}
  }
  
  render() {
    // console.log(`This is props from Profile.js: `, this.props)
    const userData = this.props.currentUser.data
    console.log(`This is props.current from Profile.js: `, this.props.currentUser)

    console.log(`This is this.props.currentUser.data from Profile.js: `, this.props.currentUser)
    // const profile = this.state.profile
    return (
        <div className="prof-wrapper">
            PROFILE
            <h1>{this.props.currentUser.name}</h1>
        </div>
    )
  }
}

export default Profile;
