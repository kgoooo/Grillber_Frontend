import React, { Component } from 'react';
import moment from "moment";
import DatePicker from "react-datepicker";

class OrderCalendar extends Component {
	constructor(props) {
		super(props);
		
		this.state=({
			deliverDate: moment(),
			deliverTime: moment(),
			pickupDate: moment(),
			pickupTime: moment(),
		})
	}
	
	handleChangeDeliver = (date) =>{
		this.setState({
			deliverDate: date
			// deliverDate: moment(date).format('YYYY-MM-DD')
		})
	};
	handleChangeDeliverTime = (time) => {
		this.setState({
			deliverTime: time
		})
	};
	handleChangePickupDate = (date) =>{
		this.setState({
			pickupDate: date
			// deliverDate: moment(date).format('YYYY-MM-DD')
		})
	};
	handleChangePickupTime = (time) => {
		this.setState({
			pickupTime: time
		})
	};

	render() {
		return (
			<div className="calendar">
				<div>
					<p>Delivery date</p>
					<DatePicker
						selected={this.state.deliverDate} 
						dateFormat="YYYY/MM/DD"
						minDate={moment()}
						onChange={this.handleChangeDeliver}
						/>
				</div>
				<div>
					<p>Delivery Time</p>
					<DatePicker 
						selected={this.state.deliverTime}
						onChange={this.handleChangeDeliverTime}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={30}
						dateFormat="LT"
						timeCaption="Time"
					/>
				</div>
				<div>
					<p>Pickup date</p>
					<DatePicker
						selected={this.state.pickupDate}
						dateFormat="YYYY/MM/DD"
						minDate={this.state.deliverDate}
						onChange={this.handleChangePickupDate}
					/>
				</div>
				<div>
					<p>Pickup time</p>
					<DatePicker
						selected={this.state.pickupTime}
						onChange={this.handleChangePickupTime}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={30}
						dateFormat="LT"
						timeCaption="Time"
					/>
				</div>
			</div>
		);
	}
}

export default OrderCalendar;