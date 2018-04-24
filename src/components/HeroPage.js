import React from 'react';
import Grills from './Grills'
import Accessories from './Accessories'

const HeroPage = () => (
	<div>
		<div className="hero"> 
			<div className="hero__box">
				<div className="hero_box--center">
					<h1 className="hero__text">
					No backyard? No problem, we bring the grill to you!
					</h1>
					<button className="btn btn--action hero__button">Start grilling</button>
					<button className="btn btn--hollow hero__button">Learn more</button>
				</div>
			</div>
		</div> 
		<Grills />
		<Accessories />
	</div>
)
		
		export default HeroPage;
		// <img className="hero__image" src="/src/resources/hero-min.jpg" />