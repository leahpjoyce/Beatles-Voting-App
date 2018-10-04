// src/App.js
const list = [
    {
      id: 1,
      name: 'John Lennon'
    },
    {
      id: 2,
      name: 'Paul McCartney'
    },
    {
      id: 3,
      name: 'George Harrison'
    },
    {
      id: 4,
      name: 'Ringo Starr'
    }
  ];
  
  class App extends Component {
    render() {
      return list.map(member => <Beatle key={member.id} name={member.name} />);
    }
  }