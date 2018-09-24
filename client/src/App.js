import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: undefined
    }
  }

  getData = (e) => {
    e.preventDefault();
    fetch(`/api/search/all/${e.target.elements.q.value}/2`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          list: data
        });
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search getData={this.getData}/>
      <Main />
      </div>
    );
  }
}

export default App;
