import React, { Component }  from 'react';
import { withRouter } from  'react-router-dom';
import axios from 'axios';
import Profile from '../components/Profile'
import UserModel from '../models/UserModel';

class UserContainer extends Component{

  state = {
    user: {},
    userData: [],
  }

  componentDidMount() {
    UserModel.getUserById(this.props.match.params.id)
    .then((result) => {
      this.setState({user: result});
    })
    .catch((err) => console.log(`This is error from user container: `, err))
  }
  
  handleUserUpdate = (event, updatedState) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`,updatedState, { withCredentials: true })
     .then(res => {
       this.setState({
          userData: updatedState
       })
     })
     .catch(err => console.log(`This is the error from user update in user container: `, err)) 
  }
  
  handleUserDelete = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`, { withCredentials: true })
     .then(res => {
      this.props.logout()
     })
    .catch(err => console.log(`This is the error from user delete in user container: `, err))
  }

  render () {
    const profileData = this.state.userData

    return (
      <>
       <Profile profileData={profileData} currentUser={this.props.currentUser} handleUserUpdate={this.handleUserUpdate} handleUserDelete={this.handleUserDelete } />
      </>
    )
  }
} 


export default withRouter(UserContainer);