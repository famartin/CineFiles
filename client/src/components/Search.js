import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
		<section className="section search">
			<div className="container">
				<form id="search-form" onSubmit={this.props.getData} action="/search" method="GET">
					<div className="field has-addons">
						<div id="search-field-control" className="control is-large is-expanded">
							<input className="input is-large has-text-centered" type="text" id="search-field" name="q" autoComplete="off" placeholder="type a movie, tv show or person" required />
						</div>
						<div className="control">
							<button type="submit" className="button is-large" id="search-button" value="Submit">
								<span className="icon is-medium is-right">
									<i className="fa fa-search"></i>
								</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
    );
  }
}

export default Search;