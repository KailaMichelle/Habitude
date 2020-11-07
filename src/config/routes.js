import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';

export default() => (
    <Switch>
        {/* Home */}
        <Route path='/' component={HomeContainer} />

        {/* Auth */}
        

        {/* Profile */}

    </Switch>
)
