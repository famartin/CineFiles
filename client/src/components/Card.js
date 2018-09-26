import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
    	return (
			<div className="tile is-child card">
				<div className="card-content">
					<h4>{this.props.itemTitle}</h4>
					<h4>{this.props.itemName}</h4>
					<img alt={`${this.props.itemName} Poster`} className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.itemBgUrl}`} />
				</div>
			</div>
		);
	}
}

export default Card;