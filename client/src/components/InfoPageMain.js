import React, { Component } from 'react';

class InfoPageMain extends Component {
	constructor() {
		super();
		this.state = {
			movieDetails: undefined
		}
	}

	getMovieDetails = () => {
		fetch(`/api/search/id/${this.props.movieId}`)
	  	.then(res => {
				return res.json();
	  	})
	  	.then(data => {
			this.setState({
		  		movieDetails:data
			})
			console.log(this.state.movieDetails);
	  	})
	}

	componentDidMount() {
		this.getMovieDetails();
	}

	render() {
		return (
			<div className="section infoPageMain container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="text-center">
							{this.state.movieDetails}
						</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<p>Id: {this.props.movieId}</p>
					</div>
					<div className="col-md-6">
						<p></p>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPageMain;