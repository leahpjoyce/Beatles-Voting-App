// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Beatle name="John Lennon" />;
  }
}

class Beatle extends Component {
  render() {
    return <div className="App">{this.props.name}</div>;
  }
}

export default App;