import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
// import Profile from '../components/Profile'
import UserContainer from '../containers/UserContainer';

export default({ currentUser, setCurrentUser }) => (
    <Switch>
        {/* Home */}
        <Route exact path='/' component={HomeContainer} />

        {/* Auth */}
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />

        {/* Profile */}
        {/* <Route path='/users/:id' render={() =>
            <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} />
        }
        /> */}
        <Route path='/api/users/:id' render={() =>
        <UserContainer currentUser={currentUser}/>
        } />
        
        {/* <Route path='/api/users/:id' component={<Profile />}
        /> */}


    </Switch>
)
