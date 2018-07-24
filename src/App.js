import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const phrase ="Welcome to my first react project using create-react-app!";
    const user = {
      name: "diego",
      lastname: "salgado"
    };
    return (
      <div className="App"> 
      <h1>{phrase} My name is: {user.name}</h1>
      </div>
    );
  }
}

export default App;
