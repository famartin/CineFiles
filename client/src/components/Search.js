import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
		<section className="section search">
			<div className="container">
				<form id="search-form" action="/searches" method="POST">
					<input type="hidden" name="_csrf" value="XeiXGVjn-Xs_3aSk_7iMGzh84PgeyMRWRwr4" />
					<div className="field has-addons">
						<div id="search-field-control" className="control is-large is-expanded">
							<input className="input is-large has-text-centered" type="text" id="search-field" name="q" autocomplete="off" />
						</div>
						<div class="control">
							<button type="submit" class="button is-large" id="search-button">
								<span class="icon is-medium is-right">
									<i class="fa fa-search"></i>
								</span>
							</button>
						</div>
					</div>
					<p class="help has-text-centered">
						For example: <strong>harry styles - sign of the times</strong>
						<span class="is-hidden-mobile">(which is 120 BPM, by the way)</span>
					</p>
				</form>
			</div>
		</section>
    );
  }
}

export default Search;