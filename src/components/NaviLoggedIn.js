import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from "./HomePage";
// import HeroPage from "./HeroPage";
// import SignUpPage from "./SignUpPage";
import HowitWorks from "./HowitWorks";
import About from "./AboutUs";
import ContactUs from "./ContactUs";
import LoginPage from "./LoginPage";
import AboutUs from "./AboutUs";

const NaviLoggedIn = () => {
	return (
		<div className="navigation">
			<ul className="navigation_list">
				<li className="navigation__list-item"><Link to="/">Home</Link></li>
				<li className="navigation__list-item"><Link to="/order">Place an order</Link></li>
				<li className="navigation__list-item"><Link to="/howitworks">How it Works</Link></li>
				<li className="navigation__list-item"><Link to="/about"></Link>About Us</li>
				<li className="navigation__list-item"><Link to="/contact"></Link>Contact Us</li>
				<li className="navigation__list-item">Sign out</li>
			</ul>
		</div>
	);
}

export default NaviLoggedIn;