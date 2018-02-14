import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import Listings from "./Listings";
class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listings: []
		}
		this.renderSearchResults = this.renderSearchResults.bind(this)
	}
	componentWillMount() {
		fetch('/homes')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					listings: responseJson,
					loading: false
				})
			})
	}

	renderSearchResults(listings) {
		this.setState({listings: listings})
	}
	render() {
		return (
			<div className="row mb-5 mt-5">
				<div className="col-4">
					<SearchForm renderSearchResults={this.renderSearchResults}/>
				</div>
				{this.state.loading ?
					<li className="list-group-item col-12">Loading...</li>:
					<Listings listings={this.state.listings} {...this.props}/>
				}
			</div>
		);
	}
}

export default LandingPage;
