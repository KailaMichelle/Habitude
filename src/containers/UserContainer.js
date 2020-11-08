import React, { Component }  from 'react';
import { withRouter } from  'react-router-dom';
import Profile from '../components/Profile'
import UserModel from '../models/UserModel';
import HabitsListContainer from './HabitsListContainer';

class UserContainer extends Component{

  state = {
    user: {},
    userData: [],
  }

  componentDidMount(){
    UserModel.getUserById(this.props.currentUser)
        .then((result) => {
            console.log(`this.state.user ${this.state.user}`)
            this.setState({user: result});
        })
        .catch((err) => console.log(`ERROR ${err}`))
}
  
//   handleUserUpdate = (event, updatedState) => {
//     event.preventDefault();
//     axios.put(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`,updatedState, { withCredentials: true })
//      .then(res => {
//        this.setState({
//           userData: updatedState
//        })
//      })
//      .catch(err => console.log(`This is the error from user update in user container: `, err)) 
//   }
  
//   handleUserDelete = (event) => {
//     event.preventDefault();
//     axios.delete(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`, { withCredentials: true })
//      .then(res => {
//       this.props.logout()
//      })
//     .catch(err => console.log(`This is the error from user delete in user container: `, err))
//   }

  render () {
      console.log(`this.props.current user from usercontainer : ${JSON.stringify(this.props.currentUser)}`)
      console.log(`this.state.user from user container: ${JSON.stringify(this.state.user)}`)

    return (
        <div>
            <Profile currentUser={this.state.user}/>
            <HabitsListContainer currentUser={this.state.user} />
        </div>

    )
  }
} 


export default withRouter(UserContainer);