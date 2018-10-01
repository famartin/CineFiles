import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: undefined,
      currentCategory: 'now-playing'
    }
  }

  searchData = (e) => {
    e.preventDefault();

    this.setState({
      currentCategory: 'search'
    });

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
    this.setState({
      currentCategory: 'discover'
    });

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

  nowPlayingData = () => {
    this.setState({
      currentCategory: 'now-playing'
    });

    fetch(`/api/movie/now_playing/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list:data
      })
    })
  }

  upcomingData = () => {
    this.setState({
      currentCategory: 'upcoming'
    });

    fetch(`/api/movie/upcoming/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list:data
      })
    })
  }

  popularData = () => {
    this.setState({
      currentCategory: 'popular'
    });

    fetch(`/api/movie/popular/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list:data
      })
    })
  }

  componentDidMount() {
    this.nowPlayingData();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search getData={this.searchData}/>
      <Main
        passedData={this.state.list}
        currentCategory={this.state.currentCategory}
        getNowPlaying={this.nowPlayingData}
        getDiscover={this.discoverData}
        getUpcoming={this.upcomingData}
        getPopular={this.popularData}
      />
      </div>
    );
  }
}

export default App;
