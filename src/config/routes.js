import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

export default({ currentUser, setCurrentUser }) => (
    <Switch>
        {/* Home */}
        <Route exact path='/' component={HomeContainer} />

        {/* Auth */}
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />

        {/* Profile */}

    </Switch>
)
