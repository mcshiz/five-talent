import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Register extends Component {
	constructor(props) {
		super(props)
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
								<input type="text" name="firstName" className="form-control" placeholder="First Name"/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
							<div className="col-10">
								<input type="text" name="lastName" className="form-control" placeholder="Last Name"/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
							<div className="col-10">
								<input type="email" name="email" className="form-control" placeholder="Email Name"/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
							<div className="col-10">
								<input type="password" name="password" className="form-control" placeholder="Password"/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="passwordConfirm" className="col-sm-2 col-form-label">Password Confirm</label>
							<div className="col-10">
								<input type="password" name="passwordConfirm" className="form-control" placeholder="Password Confirm"/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">Register</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
