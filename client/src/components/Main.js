import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	render() {
		console.log(this.props.passedData);
    	return (
			<section className="section main">
				<div className="container">
					<div className="tile is-ancestor is-vertical">
						<div className="tile is-vertical is-parent">
							{
								this.props.passedData && this.props.passedData.results.map((item) => {
									return (<Card
										itemTitle={item.title}
										itemName={item.name}
										itemType={item.media_type}
										itemBgUrl={item.backdrop_path}
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