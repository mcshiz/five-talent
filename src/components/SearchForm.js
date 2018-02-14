import React, { Component } from 'react';
import FormInput from "./FormInput";
import withQuery from 'with-query'
class SearchForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchFields: {
				mls:'',
				city:'',
				state:'',
				zip:'',
				bedrooms:'',
				bathrooms:'',
				squareFeet:''
			}
		}
		this.updateForm = this.updateForm.bind(this)
		this.submitSearch = this.submitSearch.bind(this)
	}
	updateForm(e) {
		let searchFields = Object.assign({}, this.state.searchFields, {[e.target.name]: e.target.value})
		this.setState({
			searchFields: searchFields
		})
	}
	submitSearch(e) {
		e.preventDefault()
		fetch(withQuery('/homes/search', this.state.searchFields))
			.then(res => res.json())
			.then((json) => {
				this.props.renderSearchResults(json);
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			<div>
				<form>
					<h4>Search</h4>
					<FormInput fields={this.state.searchFields} update={this.updateForm}/>
					<button className="btn btn-primary" onClick={this.submitSearch}>Search</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
