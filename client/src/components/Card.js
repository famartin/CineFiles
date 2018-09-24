import React, { Component } from 'react';

class Card extends Component {
	render() {
    	return (
			<div class="tile is-child card">
				<div class="card-content">
					<p>{this.props.name}</p>
				</div>
			</div>
		);
	}
}

export default Card;