import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
    	return (
			<div className="tile is-child card">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="card-content">
								{this.props.itemTitle && <h4 className="card-title">{this.props.itemTitle}</h4>}
								{this.props.itemName && <h4 className="card-title">{this.props.itemName}</h4>}
								<img alt={`${this.props.itemName} Poster`} className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.itemBgUrl}`} />
							</div>
						</div>
						<div className="col-sm-8">
							<p>{this.props.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;