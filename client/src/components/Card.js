import React, { Component } from 'react';

class Card extends Component {
	render() {
    	return (
			<div className="tile is-child card">
				<div className="card-content">
					<h4>{this.props.itemTitle}</h4>
					<h4>{this.props.itemName}</h4>
					<p>{this.props.itemType}</p>
				</div>
			</div>
		);
	}
}

export default Card;