import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { name: 'Daniel' },
      { name: 'Hunter' }
    ]
  }

  changeNameHandler = () => {
    this.setState({
      users: [
        { name: 'José' }
      ]
    });
  };

  writeNameHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value }
      ]
    })
  };
  
  render() {
    const style = {
      border: '2px solid blue'
    }
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.changeNameHandler}
        >
Change Name
        </button>
        <UserInput
          type='text'
          changed={this.writeNameHandler}
          name={this.state.users[0].name}
        />
        <UserOutput 
          name={this.state.users[0].name}
          changed={this.writeNameHandler}
        />
        
        <UserOutput />
      </div>
    );
  }
}

export default App;
