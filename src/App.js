import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    userName: 'Ana'
  }

  usernameChanger = (event) =>{
    this.setState({userName: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <h2>This is a simple exercise to refresh basic React syntax</h2>
        <UserInput 
          changed={this.usernameChanger}
          currentName={this.state.userName} />
          <UserOutput username={this.state.userName} comment="This is a dynamic component which is going to reflect whichever good words you type into the box above :)"/>
        <UserOutput username="Anastasiia" comment="This is a static component, name is hardcoded, and nothing fancy is going to happen :("/>
      </div>
    )
  }
}

export default App;
