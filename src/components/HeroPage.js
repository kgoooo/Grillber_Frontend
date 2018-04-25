import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const HeroPage = () => (
	<div>
		<div className="hero"> 
			<div className="hero__box">
				<div className="hero_box--center">
					<h1 className="hero__text">
					No backyard? No problem, we bring the grill to you!
					</h1>
					<div className="hero__button_box">
						<button className="btn btn--action hero__button"><Link to="/order">Start grilling</Link></button>
						<button className="btn btn--hollow hero__button"><Link to="/howitworks">Learn more</Link></button>
					</div>
				</div>
			</div>
		</div> 
	</div>
)
		
		export default HeroPage;
		// <img className="hero__image" src="/src/resources/hero-min.jpg" />