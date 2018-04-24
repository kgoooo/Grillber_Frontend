import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header'
import AppRouter from '../router/AppRouter';

class Grillber extends Component {
	constructor() {
		super();
		
		this.state=({
			signedIn: false
		})
	}
	render(){
		return <div>
			<AppRouter/>
		</div>;
	}
}

// Grillber.propTypes = {
// 	signedIn: PropTypes.bool.isRequired
// }

export default Grillber;