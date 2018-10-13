import React, { Component } from 'react';

class InfoPageMain extends Component {
	render() {
		return (
			<div className="section infoPageMain container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">
							{this.props.movieTitle}
						</h2>
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