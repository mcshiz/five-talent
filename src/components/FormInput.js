import React, { Component } from 'react';
class FormInput extends Component {


	render() {
		let fields = Object.keys(this.props.fields).map((field, index) => (
			<div className="form-group row" key={index}>
				<div className="col-12">
					<input name={field} className="form-control" placeholder={field}
						   value={this.props.fields[field] || ''} onChange={this.props.update}/>
				</div>
			</div>
		))
		return (
			<span>
				{fields}
			</span>
		);
	}
}

export default FormInput;
