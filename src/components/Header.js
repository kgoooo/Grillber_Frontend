import React from 'react';
import Navigation from './Navigation';

const Header = () => {
	return (
		<div className="header">
			<div className="header__box">
				<h1 className="header__hero-text">Grillber</h1>
				<Navigation />
			</div>
		</div>
	)
}

export default Header;