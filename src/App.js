import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import { profilePage } from './config';

const getData = () => {
  axios.get(profilePage).then(({ data }) => {
    console.log(data);
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={() => getData()}>Click</button>
        </p>
      </div>
    );
  }
}

export default App;
