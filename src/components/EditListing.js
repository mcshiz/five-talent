import React, { Component } from 'react';
import ImageTools from '../utilities/ImageTools'
import FormInput from "./FormInput";
import ImageUploader from './ImageUploader';
class EditListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			home: {}
		}
		this.handleFormUpdate = this.handleFormUpdate.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.deleteListing = this.deleteListing.bind(this)
		this.uploadImage = this.uploadImage.bind(this)
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
	uploadImage(e) {
		let file = e.target.files[0]
		let reader = new FileReader()
		file.src = reader.result

		ImageTools.resize(file, {
			width: 810, // maximum width
			height: 375 // maximum height
		}, (blob, didItResize) => {
			console.log(blob)
			let update = Object.assign({}, this.state.home, {pictures: URL.createObjectURL(file)})
			this.setState({home: update})
			console.log(this.state)
		})
	}
	handleFormUpdate(e) {
		let update = Object.assign({}, this.state.home, {[e.target.name]: e.target.value})
		this.setState({
				home: update
		})
	}
	handleFormSubmit(e) {
		e.preventDefault()
		fetch('/homes', {
			method: 'put',
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
				alert(message.success)
			}
		})
	}
	deleteListing(e) {
		e.preventDefault()
		const { history } = this.props;
		if(window.confirm("Are you sure you want to delete this listing?")) {
			fetch('/homes', {
				method: 'delete',
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
	}
	render() {
		return (
			this.state.loading ? <div>Loading...</div> :
			<div className="row mt-5">
				<div className="col-12">
					<h1>Edit</h1>
				</div>
				<div className="col-2"></div>
				<div className="col-8 ">
					<form>
						<FormInput fields={this.state.home} update={this.handleFormUpdate}/>
						<ImageUploader/>
						<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
						<button className="btn btn-danger ml-2" onClick={this.deleteListing}>Delete</button>
					</form>
				</div>
			</div>
		);
	}
}

export default EditListing;
