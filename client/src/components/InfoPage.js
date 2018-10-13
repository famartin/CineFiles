import React, { Component } from 'react';
import './InfoPage.css';

import Header from './Header';
import InfoPageMain from './InfoPageMain';

class InfoPage extends Component {
	render() {
		return (
			<div className="infoPage">
				<Header />
				<InfoPageMain
					movieId={this.props.match.params.id}
				/>
			</div>
		);
	}
}

export default InfoPage;