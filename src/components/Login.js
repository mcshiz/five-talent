import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
class HomeDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
		this.updateEmail = this.updateEmail.bind(this)
		this.updatePassword = this.updatePassword.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	updateEmail(e) {
		this.setState({email: e.target.value})
	}
	updatePassword(e) {
		this.setState({password: e.target.value})
	}
	handleLogin(e) {
		const { history } = this.props;
		e.preventDefault()
		if(this.state.email === '' || this.state.password === '') {
			return alert("Please fill in email and password")
		}
		this.props.login(this.state.email, this.state.password, history)
	}

	render() {
		return (
			<div className="row mt-5">
				<div className="col-2"></div>
				<div className="col-8 ">
					<form>
						<div className="form-group row">
							<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
							<div className="col-10">
								<input type="email" name="email" className="form-control" placeholder="Email Name" value={this.state.email} onChange={this.updateEmail}/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
							<div className="col-10">
								<input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary" onClick={(event) => this.handleLogin(event)}>Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default HomeDetails;
