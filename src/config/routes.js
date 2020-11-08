import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
// import Profile from '../components/Profile'
import UserContainer from '../containers/UserContainer';
import NewHabitContainer from '../containers/NewHabitContainer';
import Habit from '../components/Habit';
import EditHabitForm from '../components/EditHabitForm';

export default({ currentUser, setCurrentUser }) => (
    <Switch>
        {/* Home */}
        <Route exact path='/' component={HomeContainer} />

        {/* Auth */}
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />

        {/* Profile */}
        <Route path='/api/users/:id' render={() =>
        <UserContainer currentUser={currentUser}/>
        } />

        {/* Add New Habit */}
        <Route path='/habits/new' render={() => 
            <NewHabitContainer currentUser={currentUser}/>} 
            />
        {/* Edit Habit */}
        <Route path='/habits/:id/edit' component={EditHabitForm} />
        {/* Habit Show Page */}
        <Route path='/habits/:id' render = {props => <Habit {...props} currentUser={currentUser} />}  />


    </Switch>
)
