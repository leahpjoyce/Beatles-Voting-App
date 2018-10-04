import React, { Component } from 'react';
import './App.css';

const list = [
  {
    name: 'John Lennon'
  },
  {
    name: 'Paul McCartney'
  },
  {
    name: 'George Harrison'
  },
  {
    name: 'Ringo Starr'
  }
];

class App extends Component {
  render() {
    return (
      list.map(member => 
        <Beatle 
          name={member.name}
        />
      )
    );
  }
}

class Beatle extends Component {
  render() {
    return <div className="App">{this.props.name}</div>;
  }
}

export default App;