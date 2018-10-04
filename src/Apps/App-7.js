// src/App.js
class Beatle extends Component {
    handleClick = () => console.log('button clicked');
  
    render() {
      return (
        <div className="App">
          {this.props.name} <button onClick={this.handleClick}>+</button>
        </div>
      );
    }
  }