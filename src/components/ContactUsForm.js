import React, { Component } from 'react';

class ContactUsForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			contactFName: '',
			contactLName: '',
			contactEmail: '',
			contactPhone: '',
			contactMessage: ''
		}
	}
	handleContactSubmit = () => {
		console.log('Submitted', this.state);
	};
	handleContactChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		console.log(e.target.value)
	};
	render(){
		return(
			<div className="contactUsForm">
				<p>CONTACT US FORM</p>
				<form onSubmit={this.handleContactSubmit}>
					<label htmlFor="contactFName">First Name</label>
					<input type="text" id="contactFName" onChange={this.handleContactChange}/>

					<label htmlFor="contactLName">Last Name</label>
					<input type="text" id="contactLName" onChange={this.handleContactChange}/>

				</form>
			</div>
		)
	}
}

export default ContactUsForm;