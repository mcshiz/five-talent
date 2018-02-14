import React, { Component } from 'react';
import FormInput from "./FormInput";
class AddListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			home: {
				mls: "",
				street1: "",
				street2: "",
				city: "",
				state: "",
				zip: "",
				neighborhood: "",
				salesPrice: "",
				dateListed: "",
				bedrooms: "",
				bathrooms: "",
				garageSize: "",
				squareFeet: "",
				lotSize: "",
				description: ""
			}
		}
		this.handleFormUpdate = this.handleFormUpdate.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormUpdate(e) {
		let update = Object.assign({}, this.state.home, {[e.target.name]: e.target.value})
		this.setState({
			home: update
		})
	}
	handleFormSubmit(e) {
		e.preventDefault()
		if(this.state.home.mls === '') {
			alert('MLS Number is required')
		}
		const { history } = this.props;
			fetch('/homes', {
				method: 'post',
				body: JSON.stringify(this.state.home),
				headers: new Headers({
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('id_token')}`})
			})
				.then(res => res.json().then(message => ({ message, res })))
				.then(({message, res}) => {
					if(!res.ok) {
						alert(message.message)
					} else {
						history.push('/')
					}
				})
	}

	render() {
		return (
				<div className="row mt-5">
					<div className="col-12">
						<h1>Add New Listing</h1>
					</div>
					<div className="col-2"></div>
					<div className="col-8 ">
						<form>
							<FormInput fields={this.state.home} update={this.handleFormUpdate}/>
							<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Add Listing</button>

						</form>
					</div>
				</div>
		);
	}
}

export default AddListing;
