import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberInfo: []
    };
  }
  componentDidMount() {
    axios.get('http://numbersapi.com/3/trivia')
      .then(res => {
        const numberInfo = res;
        console.log(res);
        this.setState({ numberInfo });
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="numberInfo">
          <p>{this.state.numberInfo.data}</p>
        </div>
      </div>
    );
  }
}

export default App;
