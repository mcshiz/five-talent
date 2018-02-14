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
		return (
			<div>
				<h1>Details</h1>
				{this.state.home.bedrooms}
			</div>
		);
	}
}

export default HomeDetails;
