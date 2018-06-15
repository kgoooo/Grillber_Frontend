import React from 'react';
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
	return (
		<div className="contactUs">
			<h1 className="contactUs__header">Get in touch with us</h1>
			<div className="contactUs__img-wrapper">
				<img className="contactUs__img" src="http://kgoehringer.io/resources/grillber/contact_page/contact_1-min.jpg" />
				<img className="contactUs__img" src="http://kgoehringer.io/resources/grillber/contact_page/contact_2-min.jpg" />
			</div>
			<ContactUsForm />
		</div>
	);
};

export default ContactUs;