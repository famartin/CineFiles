import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	render() {
    	return (
			<section className="section main">
				<div className="container">
					<ul className="nav nav-pills justify-content-center">
						<li className="nav-item">
							<a className="nav-link active" href="#">Active</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
				</div>
				<div className="container">
					<div className="tile is-ancestor is-vertical">
						<div className="tile is-vertical is-parent">
							{
								this.props.passedData && this.props.passedData.results.map((item) => {
									return (<Card
										itemTitle={item.title}
										itemName={item.name}
										itemBgUrl={item.poster_path}
									/>);
								})
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Main;