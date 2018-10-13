import React, { Component } from 'react';
import './InfoPage.css';

import Header from './Header';
import InfoPageMain from './InfoPageMain';

class InfoPage extends Component {
	constructor() {
		super();
		this.state = {
			title: undefined,
			overview: undefined,
			releaseDate: undefined
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
				overview: data.overview,
				releaseDate: data.first_air_date
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
				overview: data.overview,
				releaseDate: data.release_date
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
					itemId={this.props.match.params.id}
					itemTitle={this.state.title}
					itemOverview={this.state.overview}
					itemRelDate={this.state.releaseDate}
				/>
			</div>
		);
	}
}

export default InfoPage;