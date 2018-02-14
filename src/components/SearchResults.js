import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import Listings from "./Listings";
class SearchResults extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listings: []
		}
	}
	render() {
		return (
			<div className="row mt-5">
				<div className="col-4">
					<SearchForm/>
				</div>
				{this.state.loading ?
					<li className="list-group-item">Loading...</li>:
					<Listings listings={this.props.listings} {...this.props}/>
				}
			</div>
		);
	}
}

export default SearchResults;
