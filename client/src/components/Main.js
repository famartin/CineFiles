import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1,
			currentCategory: 'now-playing'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
        this.setState({
          currentPage: Number(event.target.id)
		});

		this.props.getCurrentPage(Number(event.target.id));
	}

	createPagination = () => {
		let pages = [];

		var numOfPages = this.props.passedData.total_pages + 1;

		if (this.props.passedData.total_pages >= 5) {
			numOfPages = 6;
		}
	
		for (let i = 1; i < numOfPages; i++) {
			pages.push(
				<li className="page-item" key={i}>
					<a className="page-link" href="/"
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
							<button className={this.props.currentCategory === 'now-playing' ? "nav-link active" : "nav-link"} onClick={this.props.getNowPlaying}>Now Playing</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'upcoming' ? "nav-link active" : "nav-link"} onClick={this.props.getUpcoming}>Upcoming</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'popular' ? "nav-link active" : "nav-link"} onClick={this.props.getPopular}>Popular</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'discover' ? "nav-link active" : "nav-link"} onClick={this.props.getDiscover}>Discover</button>
						</li>
					</ul>
				</div>
				<div className="container">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item"><a className="page-link" href="/">Previous</a></li>
							{this.props.passedData && this.createPagination()}
							<li className="page-item"><a className="page-link" href="/">Next</a></li>
						</ul>
					</nav>
				</div>
				<br />
				<div className="container">
					<div className="tile is-ancestor is-vertical">
						<div className="tile is-vertical is-parent">
							<h5>Pages: {this.props.passedData && this.props.passedData.total_pages}</h5><br />
							<h5>Current Category: {this.props.currentCategory}</h5><br />
							{
								this.props.passedData && this.props.passedData.results.map((item) => {
									return (<Card
										itemTitle={item.title}
										itemName={item.name}
										itemPosterUrl={item.poster_path}
										key={item.id}
										description={item.overview}
									/>);
								})
							}
						</div>
					</div>
				</div>
				<div className="container">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item"><a className="page-link" href="/">Previous</a></li>
							{this.props.passedData && this.createPagination()}
							<li className="page-item"><a className="page-link" href="/">Next</a></li>
						</ul>
					</nav>
				</div>
				<br />
			</section>
		);
	}
}

export default Main;