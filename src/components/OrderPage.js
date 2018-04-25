import React, { Component } from 'react';
import OrderCalendar from './OrderCalendar';
import Grills from './Grills';
import Accessories from './Accessories';

class OrderPage extends Component {
	render() {
		return (
			<div className="order">
				<h1 className="order__title">Select when you want to grill</h1>
				<OrderCalendar />
				<Grills />
				<Accessories />
			</div>
		);
	}
}

export default OrderPage;