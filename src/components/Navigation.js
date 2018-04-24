import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import HeroPage from './HeroPage';
import SignUpPage from './SignUpPage';
import HowitWorks from './HowitWorks';
import About from './AboutUs';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import AboutUs from './AboutUs';

const Navigation = () => (
	<div className="navigation">
		<ul className="navigation__list">
			<li className="navigation__list-item"><Link to="/">Home</Link></li>
			<li className="navigation__list-item"><Link to="/signup">Sign Up</Link></li>
			<li className="navigation__list-item"><Link to="/howitworks">How it works</Link></li>
			<li className="navigation__list-item"><Link to="/about">About us</Link></li>
			<li className="navigation__list-item"><Link to="/contact">Contact us</Link></li>
			<li className="navigation__list-item"><Link to="/login">Log in</Link></li>
		</ul>
	</div>
);

export default Navigation;


// import React from 'react';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import HomePage from './HomePage';
// import HeroPage from './HeroPage';
// import SignUpPage from './SignUpPage';
// import HowitWorks from './HowitWorks';
// import About from './AboutUs';
// import ContactUs from './ContactUs';
// import LoginPage from './LoginPage';
// import AboutUs from './AboutUs';

// const Navigation = () => (
// 	<Router>
// 		<div className="navigation">
// 			<ul className="navigation__list">
// 				<li className="navigation__list-item"><Link to="/">Home</Link></li>
// 				<li className="navigation__list-item"><Link to="/signup">Sign Up</Link></li>
// 				<li className="navigation__list-item"><Link to="/howitworks">How it works</Link></li>
// 				<li className="navigation__list-item"><Link to="/about">About us</Link></li>
// 				<li className="navigation__list-item"><Link to="/contact">Contact us</Link></li>
// 				<li className="navigation__list-item"><Link to="/login">Log in</Link></li>
// 			</ul>

// 			<Route exact path="/" component={HeroPage} />
// 			<Route path="/signup" component={SignUpPage} />
// 			<Route path="/howitworks" component={HowitWorks} />
// 			<Route path="/about" component={AboutUs} />
// 			<Route path="/contact" component={ContactUs} />
// 			<Route path="/login" component={LoginPage} />
// 		</div>
// 	</Router>
// );

// export default Navigation;