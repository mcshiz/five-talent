import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Register extends Component {
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
				<form action="#">
					<input type="text" name="firstName" className="form-control" placeholder="First Name"/>
					<input type="text" name="lastName" className="form-control" placeholder="Last Name"/>
					<input type="email" name="email" className="form-control" placeholder="Email Name"/>
					<input type="password" name="password" className="form-control" placeholder="Password"/>
					<input type="password" name="password" className="form-control" placeholder="Password Confrim"/>
					<button type="submit" className="btn btn-primary">Register</button>
				</form>
			</div>
		);
	}
}

export default Register;
