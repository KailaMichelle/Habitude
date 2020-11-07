import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';

import './App.css';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Routes />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
