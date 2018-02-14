import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Listings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listings: []
		}
	}
	componentWillMount() {
		fetch('/homes')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					listings: responseJson
				})
				console.log(responseJson)
			})
	}
	render() {
		let listings = this.state.listings.map((home, index) => (
			<li key={index} onClick={() => {window.history.pushState({} , true, `/homes/${home.mls}`)}}>
				<Link to={`/homes/${home.mls}`}>{home.street1} {home.street2}</Link>
			</li>
		))
		return (
			<div>
				<ul>
					{listings}
				</ul>
			</div>
		);
	}
}

export default Listings;
