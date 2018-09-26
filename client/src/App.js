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

  searchData = (e) => {
    e.preventDefault();
    fetch(`/api/search/all/${e.target.elements.q.value}/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list: data
      });
      console.log(this.state.list);
    })
  }

  discoverData = () => {
    fetch(`/api/discover/movie/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list: data
      });
    })
  }

  componentDidMount() {
    this.discoverData();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search getData={this.searchData}/>
      <Main passedData={this.state.list}/>
      </div>
    );
  }
}

export default App;
