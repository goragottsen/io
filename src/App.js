import React from 'react';
import './App.css';
import Output from './User/UserOutput';
import Input from './User/UserInput'

function App() {
  const content = {
    today: "Some text",
    tomorrow: "Some more text"
  }
  return (
    <div className="App">
      <Input/>
      <Output today={content.today} tomorrow={content.tomorrow}/>

    </div>
  );
}

export default App;
