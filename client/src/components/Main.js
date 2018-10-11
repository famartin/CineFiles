import React, { Component } from 'react';
import windowSize from 'react-window-size';
import Card from './Card';
import './Main.css';

class Main extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		this.props.getCurrentPage(Number(event.target.id));
		window.scrollTo(0, 0)
	}

	createPagination = () => {
		let pages = [];
		let numOfPages;
		let pageLimit = this.props.passedData.total_pages;

		if (this.props.passedData.total_pages < 5) {
			numOfPages = this.props.passedData.total_pages + 1;
		} else {
			if ( this.props.currentPage + 5 > pageLimit) {
				numOfPages = this.props.currentPage + (pageLimit - this.props.currentPage) + 1;
			} else {
				numOfPages = this.props.currentPage + 5;
			}
		}
	
		for (let i = this.props.currentPage; i < numOfPages; i++) {
			pages.push(
				<li className={this.props.currentPage === i ? 'page-item active' : 'page-item'} key={i}>
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
							<button className={this.props.currentCategory === 'now-playing' ? "nav-link active" : "nav-link"} onClick={() => { this.props.getNowPlaying(); this.props.resetPage(); }}>Now Playing</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'upcoming' ? "nav-link active" : "nav-link"} onClick={() => { this.props.getUpcoming(); this.props.resetPage(); }}>Upcoming</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'popular' ? "nav-link active" : "nav-link"} onClick={() => { this.props.getPopular(); this.props.resetPage(); }}>Popular</button>
						</li>
						<li className="nav-item">
							<button className={this.props.currentCategory === 'discover' ? "nav-link active" : "nav-link"} onClick={() => { this.props.getDiscover(); this.props.resetPage(); }}>Discover</button>
						</li>
					</ul>
				</div>
				<div className="container">
					<ul className={this.props.windowWidth > 575 ? "pagination justify-content-center" : "pagination pagination-sm justify-content-center"}>
						{this.props.currentPage > 1 ? <li className="page-item"><a className="page-link" href="/" id={this.props.currentPage - 1} onClick={this.handleClick}>Back</a></li> : <li></li> }
						{this.props.passedData && this.createPagination()}
						{this.props.passedData && this.props.currentPage < this.props.passedData.total_pages ? <li className="page-item"><a className="page-link" href="/" id={this.props.currentPage + 1} onClick={this.handleClick}>Next</a></li> : <li></li>}
					</ul>
				</div>
				<br />
				<div className="container">
					<div className="tile is-ancestor is-vertical">
						<div className="tile is-vertical is-parent">
							<h5>Pages: {this.props.passedData && this.props.passedData.total_pages}</h5><br />
							<h5>Current Page: {this.props.currentPage && this.props.currentPage}</h5><br />
							<h5>Window Width: {this.props.windowWidth}</h5><br />
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
					<ul className={this.props.windowWidth > 575 ? "pagination justify-content-center" : "pagination pagination-sm justify-content-center"}>
						{this.props.currentPage > 1 ? <li className="page-item"><a className="page-link" href="/" id={this.props.currentPage - 1} onClick={this.handleClick}>Back</a></li> : <li></li> }
						{this.props.passedData && this.createPagination()}
						{this.props.passedData && this.props.currentPage < this.props.passedData.total_pages ? <li className="page-item"><a className="page-link" href="/" id={this.props.currentPage + 1} onClick={this.handleClick}>Next</a></li> : <li></li>}
					</ul>
				</div>
				<br />
			</section>
		);
	}
}

export default windowSize(Main);