import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<section className="section footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8">
							<img className="tmdb-logo" src="/assets/tmdb-logo.png" /><br />
							<small>This product uses the TMDb API but is not endorsed or certified by TMDb.</small><br />
						</div>
						<div className="col-md-4">
							<h3>Thanks for stopping by...</h3>
							<p>Made with ❤️ by <a target="blank" href="https://famartin.github.io">famartin</a><br /></p>
							<small>&#169; famartin 2018</small>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;