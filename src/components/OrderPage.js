import React, { Component } from 'react';
import OrderCalendar from './OrderCalendar';
import Grills from './Grills';

class OrderPage extends Component {
	render() {
		return (
			<div>
				<h1>Order Page</h1>
				<OrderCalendar />
				<Grills />
			</div>
		);
	}
}

export default OrderPage;