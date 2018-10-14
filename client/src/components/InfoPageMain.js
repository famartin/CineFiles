import React, { Component } from 'react';

class InfoPageMain extends Component {
	render() {
		return (
			<div className="section infoPageMain container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">
							{this.props.itemTitle}
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<p>Id: {this.props.itemId}</p>
						<p>Release Date: {this.props.itemRelDate}</p>
					</div>
					<div className="col-md-6">
						<p>Overview: {this.props.itemOverview}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<img alt={`${this.props.itemTitle} Poster`} className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.itemPoster}`} />
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPageMain;