// src/App.js Event Propagation
class App extends Component {
    handleEvent = () => console.log('button clicked');
  
    render() {
      return list.map(member => <Beatle key={member.id} name={member.name} onVote={this.handleEvent} />);
    }
  }
  
  class Beatle extends Component {
    handleClick = () => this.props.onVote();
  
    render() {
      return (
        <div className="App">
          {this.props.name} <button onClick={this.handleClick}>+</button>
        </div>
      );
    }
  }