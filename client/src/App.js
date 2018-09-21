import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Search />
      <Main />
      </div>
    );
  }
}

export default App;
