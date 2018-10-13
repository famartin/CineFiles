import React, { Component } from 'react';
import './InfoPage.css';

import Header from './Header';
import InfoPageMain from './InfoPageMain';

class InfoPage extends Component {
	constructor() {
		super();
		this.state = {
			title: undefined,
			overview: undefined
		}
	}

	getTvDetails = () => {
		fetch(`/api/search/tv/id/${this.props.match.params.id}`)
	  	.then(res => {
			return res.json();
	  	})
	  	.then(data => {
			this.setState({
				title: data.name,
				overview: data.overview  
			})
	  	})
	}

	getMovieDetails = () => {
		fetch(`/api/search/movie/id/${this.props.match.params.id}`)
	  	.then(res => {
			return res.json();
	  	})
	  	.then(data => {
			this.setState({
				title: data.original_title,
				overview: data.overview
			})
	  	})
	}

	componentDidMount() {
		if (this.props.match.params.type === 'movie') {
			this.getMovieDetails();
		} else if (this.props.match.params.type === 'tv') {
			this.getTvDetails();
		} else {
			return;
		}
		
	}

	render() {
		return (
			<div className="infoPage">
				<Header />
				<InfoPageMain
					movieId={this.props.match.params.id}
					movieTitle={this.state.title}
					movieOverview={this.state.overview}
				/>
			</div>
		);
	}
}

export default InfoPage;