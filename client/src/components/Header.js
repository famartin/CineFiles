import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
		<header className="Header hero">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						<a href="/">
							<img src="/assets/logo.png" alt="CINEFILES" />
						</a>
					</h1>
				</div>
			</div>
		</header>
    );
  }
}

export default Header;