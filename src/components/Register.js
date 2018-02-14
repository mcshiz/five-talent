import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: ''
		}
		this.register = this.register.bind(this)
		this.updateForm = this.updateForm.bind(this)
	}
	updateForm(e) {
		this.setState({[e.target.name]: e.target.value})
	}
	register(e) {
		const { history } = this.props;
		e.preventDefault()
		if(this.state.email === '' || this.state.password === '' ) {
			return alert("Email and username are required")
		}
		if(this.state.password !== this.state.passwordConfirm) {
			return alert("Passwords do not match")
		}
		fetch('/signup', {
			method: 'post',
			body: JSON.stringify(this.state),
			headers: new Headers({"Content-Type": "application/json"})
		})
		.then(res => res.json().then(user => ({ user, res })))
		.then(({user, res}) => {
			if(!res.ok) {
				alert(user.message)
			} else {
				history.push('/')
			}
		})
	}
	render() {
		return (
			<div className="row mt-5">
				<div className="col-2"></div>
				<div className="col-8 ">
					<form>
						<div className="form-group row">
							<label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
							<div className="col-10">
								<input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={this.updateForm}/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
							<div className="col-10">
								<input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={this.updateForm}/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
							<div className="col-10">
								<input type="email" name="email" className="form-control" placeholder="Email Name" onChange={this.updateForm}/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
							<div className="col-10">
								<input type="password" name="password" className="form-control" placeholder="Password" onChange={this.updateForm}/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="passwordConfirm" className="col-sm-2 col-form-label">Password Confirm</label>
							<div className="col-10">
								<input type="password" name="passwordConfirm" className="form-control" placeholder="Password Confirm" onChange={this.updateForm}/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary" onClick={this.register}>Register</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
