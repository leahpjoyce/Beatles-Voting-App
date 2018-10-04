// src/App.js
class Beatle extends Component {
    render() {
      return (
        <div className="App">
          {this.props.name} <button onClick={console.log('button clicked')}>+</button>
        </div>
      );
    }
  }