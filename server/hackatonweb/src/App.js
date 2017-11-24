import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Header/>
	Despues del header
      </div>
    );
  }
}

export default App;
