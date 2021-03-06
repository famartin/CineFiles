import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Search from './Search';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
	constructor() {
	  super();
	  this.state = {
		list: undefined,
		currentPage: 1,
		currentCategory: 'now-playing',
		searchQuery: undefined
	  }
	}
  
	resetPage = () => {
	  this.setState({
		currentPage: 1
	  });
	}
  
	getCurrentPage = (data) => {
	  this.setState({
		currentPage: data
	  });
  
	  switch (this.state.currentCategory) {
		default: 
		  this.nowPlayingData(data);
		  break;
  
		case 'search':
		  this.changeSearchPage(data);
		  break;
  
		case 'now-playing':
		  this.nowPlayingData(data);
		  break;
  
		case 'upcoming':
		  this.upcomingData(data);
		  break;
  
		case 'popular':
		  this.popularData(data);
		  break;
  
		case 'discover':
		  this.discoverData(data);
		  break;   
	  }
	}
  
	searchData = (e) => {
	  e.preventDefault();
  
	  this.setState({
		currentCategory: 'search',
		currentPage: 1,
		searchQuery: e.target.elements.q.value
	  });
  
	  fetch(`/api/search/all/${e.target.elements.q.value}/1`)
	  .then(res => {
		return res.json();
	  })
	  .then(data => {
		this.setState({
		  list: data
		});
	  })
	}
  
	changeSearchPage = (page) => {
	  this.setState({
		currentCategory: 'search'
	  });
  
	  fetch(`/api/search/all/${this.state.searchQuery}/${page}`)
	  .then(res => {
		return res.json();
	  })
	  .then(data => {
		this.setState({
		  list: data
		});
	  })
	}
  
	discoverData = (page) => {
	  this.setState({
		currentCategory: 'discover'
	  });
  
	  fetch(`/api/discover/movie/${page}`)
	  .then(res => {
		return res.json();
	  })
	  .then(data => {
		this.setState({
		  list: data
		});
	  })
	}
  
	nowPlayingData = (page) => {
	  this.setState({
		currentCategory: 'now-playing'
	  });
  
	  fetch(`/api/movie/now_playing/${page}`)
	  .then(res => {
		return res.json();
	  })
	  .then(data => {
		this.setState({
		  list:data
		})
	  })
	}
  
	upcomingData = (page) => {
	  this.setState({
		currentCategory: 'upcoming'
	  });
  
	  fetch(`/api/movie/upcoming/${page}`)
	  .then(res => {
		return res.json();
	  })
	  .then(data => {
		this.setState({
		  list:data
		})
	  })
	}
  
	popularData = (page) => {
	  this.setState({
		currentCategory: 'popular'
	  });
  
	  fetch(`/api/movie/popular/${page}`)
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
	  console.log(this.state.currentPage);
	  return (
		<div className="Home">
		<Header />
		<Search getData={this.searchData}/>
		<Main
		  passedData={this.state.list}
		  currentCategory={this.state.currentCategory}
		  currentPage={this.state.currentPage}
		  getNowPlaying={this.nowPlayingData}
		  getDiscover={this.discoverData}
		  getUpcoming={this.upcomingData}
		  getPopular={this.popularData}
		  getCurrentPage={this.getCurrentPage}
		  resetPage={this.resetPage}
		/>
		<Footer />
		</div>
	  );
	}
  }
  
  export default Home;