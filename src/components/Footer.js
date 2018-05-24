import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<ul className="footer__list">
				<li className="footer__list-item"><Link to="/">Home</Link></li>
				<li className="footer__list-item"><Link to="/signup">Sign Up</Link></li>
				<li className="footer__list-item"><Link to="/howitworks">How it works</Link></li>
				<li className="footer__list-item"><Link to="/order">Place an order</Link></li>
				<li className="footer__list-item"><Link to="/about">About us</Link></li>
				<li className="footer__list-item"><Link to="/contact">Contact us</Link></li>
				<li className="footer__list-item"><Link to="/login">Log in</Link></li>
			</ul>
			<div className="footer__logo-wrapper">
				<p className="footer__logo">Grillber</p>
				<p className="footer__logo-copy">All rights reserved 2018</p>
			</div>
		</div>
	)
};

export default Footer;
