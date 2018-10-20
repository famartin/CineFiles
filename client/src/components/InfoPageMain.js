import React, { Component } from 'react';

class InfoPageMain extends Component {
	render() {
		return (
			<div className="section infoPageMain">
				<div className="section infoPageTitle container">
					<div className="row titleBlockBg" style={{'background-image': `url('https://image.tmdb.org/t/p/w1280${this.props.itemBackdrop}')`}}>
						<div className="col-md-12 titleBlock">
							<h2 className="text-center itemTitle">
								{this.props.itemTitle}
							</h2>
						</div>
					</div>
				</div>
				<div className="section infoPageContent container">
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
						<div className="col-md-6">
							{this.props.itemPoster && <img alt={`${this.props.itemTitle} Poster`} className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.itemPoster}`} /> }
						</div>
						<div className="col-md-6">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPageMain;