// src/App.js State
class App extends Component {
    state = {
      members: []
    };
  
    componentDidMount() {
      this.setState({ members: list });
    }
  
    handleEvent = e => console.log('button clicked for ' + e);
  
    render() {
      return this.state.members.map(member => <Beatle key={member.id} name={member.name} onVote={this.handleEvent} />);
    }
  }

