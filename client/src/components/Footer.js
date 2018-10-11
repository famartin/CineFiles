import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<section className="section footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8">
							<img className="tmdb-logo" src="/assets/tmdb-logo.png" alt="The Movie Database Logo" /><br />
							<p><small>This product uses the TMDb API<br />but is not endorsed or certified by TMDb.</small></p>
						</div>
						<div className="col-md-4 thank-you">
							<h4 className="text-right">Thanks for stopping by...</h4>
							<p className="text-right">Made with <span role="img" aria-label="Heart Emoji">❤️</span> by <a target="blank" href="https://famartin.github.io">famartin</a><br /><small className="text-right">&#169; famartin 2018</small></p>
							
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;