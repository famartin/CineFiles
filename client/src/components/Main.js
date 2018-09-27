import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	render() {
    	return (
			<section className="section main">
				<div className="container">
					<ul id="CategoryToggle" className="nav nav-pills justify-content-center">
						<li className="nav-item">
							<button className="nav-link active" onClick={this.props.getNowPlaying}>Now Playing</button>
						</li>
						<li className="nav-item">
							<button className="nav-link" >Upcoming</button>
						</li>
						<li className="nav-item">
							<button className="nav-link" >Popular</button>
						</li>
						<li className="nav-item">
							<button className="nav-link" onClick={this.props.getDiscover}>Discover</button>
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
										key={item.id}
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