// src/App.js
class Beatle extends Component {
    handleClick = e => console.log('button clicked for' + e.target);
  
    render() {
      return (
        <div className="App">
          {this.props.name} <button onClick={this.handleClick}>+</button>
        </div>
      );
    }
  }