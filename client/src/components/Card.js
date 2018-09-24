import React, { Component } from 'react';

class Card extends Component {
	render() {
    	return (
			<h2>{this.props.name}</h2>
		);
	}
}

export default Card;