import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HomeDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			home: {}
		}
	}
	componentWillMount() {
		const { match: { params } } = this.props;
		fetch(`/homes/${params.mls}`)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					home: responseJson,
					loading: false
				})
			}).catch((error) => {
				console.log(error)
		})
	}
	render() {
		let details = Object.keys(this.state.home).map((key, index) => (
			<li className="list-group-item" key={index}><b>{key}:</b> {this.state.home[key]}</li>
		))
		return (
			<div>
				<h1>Details</h1>
				<ul className="list-group text-left">
					{details}
				</ul>
			</div>
		);
	}
}

export default HomeDetails;
