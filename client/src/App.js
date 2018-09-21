import React, { Component } from 'react';
import './App.css';
import  Header  from './components/Header';
import  Search  from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Search />
      <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
