import React, { Component } from 'react';
// import uuidv1 from 'uuid';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import postNewUser from '../api/signUpForm'

//TODO once REDUX is setup, need to add action to handleSubmit to change signedIn to TRUE

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      phone: "",
      street1: "",
      street2: "",
      state: "",
      zipCode: "",
      password: "",
      password2: "",
      date: moment(),
      currentStates: ["IL", "MA", "NY", "PA"],
      yearOptions: [],
			year: '2018',
			month: 'January',
			day: '01',
			monthOptions: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			dayOptions: []
    };
  }


  componentWillMount(){
  	let yearArr = [];
  	let dayArr = [];
  	let padJ = null;
  	for(let i = 2018; i > 1900; i--){
  		yearArr.push(i.toString());
		}
		for (let j = 1; j < 32; j++) {
			padJ = j.toString();
			padJ = padJ.padStart(2, '0');
			console.log(padJ);
  		dayArr.push(padJ);
		}
		this.setState({
			yearOptions: yearArr,
			dayOptions: dayArr
		});
	};


  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  handleClick = (e) => {
    this.setState({
      state: e.target.value
    })
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    let dob = this.state.year + "-" + this.state.month + "-" + this.state.day;
    this.setState({
			dob
		});
    postNewUser(this.state)

    //TODO DISPATCH AN ACTION TO SET SIGNED IN TRUE
  };

  render() {
    return <div className="signUpForm">
        <div>
          <h2 className="signUpForm__header">
            Sign up and start grilling today!
          </h2>
          <p className="signUpForm__copy">
            Please provide the requested information to create your account
            with Grillber.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="signUpForm__wrapper">
              <div>
                <label htmlFor="firstName" className="signUpForm__label">First name</label>
                <input type="text" id="firstName" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="lastName" className="signUpForm__label">Last name</label>
                <input type="text" id="lastName" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="signUpForm__label">Email address</label>
                <input type="text" id="email" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="dob" className="signUpForm__label">Date of birth</label>
								<div className="signUpForm__DOBWrapper">
									<select name="month" id="month" onChange={this.handleChange}>
										{this.state.monthOptions.map((month, i) => (<option key={month} value={i + 1}>{month}</option>))}
									</select>
									<select name="day" id="day" onChange={this.handleChange}>
										{this.state.dayOptions.map(day => (<option key={day} value={day}>{day}</option>))}
									</select>
									<select name="year" id="year" onChange={this.handleChange}>
										{this.state.yearOptions.map(year => ( <option key={year} value={year}>{year}</option> ))}
									</select>
								</div>
              </div>
              <div>
                <label htmlFor="street1" className="signUpForm__label">Street address</label>
                <input type="text" id="street1" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="street2" className="signUpForm__label">
                  Street address 2 <span className="signUpForm__helper">(optional)</span>
                </label>
                <input type="text" id="street2" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div className="signUpForm__state">
                <label htmlFor="state" className="signUpForm__label">State</label>
								<div>
								{this.state.currentStates.map(state => <button
                  className={this.state.state === state ? "signUpForm__buttons active" : "signUpForm__buttons"}
                  type="button"
                  value={state}
                  key={state}
                  onClick={this.handleClick}>{state}
                  </button> )}
								</div>
              </div>
              <div>
                <label htmlFor="zipCode" className="signUpForm__label">Zip code</label>
                <input type="text" id="zipCode" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="phone" className="signUpForm__label">Phone number</label>
                <input type="text" id="phone" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="password" className="signUpForm__label">
                  Password <span className="signUpForm__helper">(min 6 characters)</span>
                </label>
                <input type="text" id="password" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="password2" className="signUpForm__label">
                  Password <span className="signUpForm__helper">(please re-enter)</span>
                </label>
                <input type="text" id="password2" className="signUpForm__input" onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn--action signUpButton">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>;
  }
}

export default SignUpForm;
