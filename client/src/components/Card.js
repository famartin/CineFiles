import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
    	return (
			<div className="tile is-child card">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							{this.props.itemTitle && <h4 className="card-title">{this.props.itemTitle}</h4>}
							{this.props.itemName && <h4 className="card-title">{this.props.itemName}</h4>}
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<div className="card-content">
								{this.props.itemPosterUrl && <img alt={`${this.props.itemName} Poster`} className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.itemPosterUrl}`} />}
								{!this.props.itemPosterUrl && <img alt={`${this.props.itemName} Poster`} className="poster" src="/assets/poster-not-found.jpg" />}
							</div>
						</div>
						<div className="col-sm-8">
							<div className="card-overview-bg">
								<p className="card-overview">{this.props.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;