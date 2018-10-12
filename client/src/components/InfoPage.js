import React, { Component } from 'react';

import Header from './Header';

class InfoPage extends Component {
	render() {
		return (
			<div className="infoPage">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h3 className="text-center">
								Movie/Series Name
							</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPage;