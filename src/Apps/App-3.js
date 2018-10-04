// src/App.js
import React, { Component } from 'react';
import './App.css';

const list = [
  {
    name: 'John Lennon',
  }
]

class App extends Component {
  render() {
    const member = list[0];
    return <Beatle
      name={member.name}
    />;
  }
}

class Beatle extends Component {
  render() {
    return <div className="App">{this.props.name}</div>;
  }
}

export default App;