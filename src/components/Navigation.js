import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


const Navigation = () => (
	<div className="navigation">
		<ul className="navigation__list">
			<li className="navigation__list-item"><Link to="/">Home</Link></li>
			<li className="navigation__list-item"><Link to="/signup">Sign Up</Link></li>
			<li className="navigation__list-item"><Link to="/howitworks">How it works</Link></li>
			<li className="navigation__list-item"><Link to="/order">Place an order</Link></li>			
			<li className="navigation__list-item"><Link to="/about">About us</Link></li>
			<li className="navigation__list-item"><Link to="/contact">Contact us</Link></li>
			<li className="navigation__list-item"><Link to="/login">Log in</Link></li>
		</ul>
	</div>
);

export default Navigation;
