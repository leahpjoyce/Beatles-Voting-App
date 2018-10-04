// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Beatle />;
  }
}

class Beatle extends Component {
  render() {
    return 
    <div className="App">Hello, World!</div>;
  }
}

export default App;