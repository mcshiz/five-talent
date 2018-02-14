import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
class Listings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listings: []
		}
	}
	render() {
		let listings
		if(this.props.listings.length <= 0 ) {
			listings = <li className="list-group-item" key='none'>No Listings</li>

		} else {
			listings = this.props.listings.map((home, index) => (
				<li key={index} className="list-group-item">
					<div className="row">
						<div className="col-2">
							{/*<img src={home.pictures[0]} alt=""/>*/}
						</div>
						<div className="col-8 text-left">
							<b>Price:</b> <span>${home.salesPrice.toLocaleString(undefined, {maximumFractionDigits:2})}</span> <br/>
							<b>Address:</b> <span>{home.street1} {home.street2} {home.city} {home.state} {home.zip}</span> <br/>
							<b>Square Footage:</b> <span>{home.squareFeet}</span> <br/>
							<b>Bedrooms:</b> <span>{home.bedrooms}</span> <br/>
							<b>Bathrooms:</b> <span>{home.bathrooms}</span> <br/>
						</div>
						<div className="col-2">
						<Link to={`/homes/${home.mls}`}>View Listing</Link> <br/>
						{this.props.authenticated && <Link to={`/homes/edit/${home.mls}`}>Edit Listing</Link>}
						</div>
					</div>
				</li>
			))
		}
		return (
				<ul className="list-group col-8">
					<h4>Listings</h4>
					{listings}
				</ul>
		);
	}
}

export default Listings;
