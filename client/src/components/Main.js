import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
		});
		console.log(event.target.id);
		console.log(this.state.currentPage);
    }

	createPagination = () => {
		let pages = [];
	
		for (let i = 1; i < this.props.passedData.total_pages; i++) {
			pages.push(
				<li className="page-item" key={i}>
					<a className="page-link" href="#"
						id={i}
						onClick={this.handleClick}
					>
						{i}
					</a>
				</li>
			);
		}
		return pages;
	}

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
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item"><a className="page-link" href="#">Previous</a></li>
							<li className="page-item"><a className="page-link" href="#">1</a></li>
							{this.props.passedData && this.createPagination()}
							<li className="page-item"><a className="page-link" href="#">Next</a></li>
						</ul>
					</nav>
				</div>
				<br />
				<div className="container">
					<div className="tile is-ancestor is-vertical">
						<div className="tile is-vertical is-parent">
							<h5>Pages: {this.props.passedData && this.props.passedData.total_pages}</h5><br />
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