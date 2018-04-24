import React, { Component } from 'react';
// import uuidv1 from 'uuid';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import postNewUser from '../api/signUpForm'

//once REDUX is setup, need to add action to handleSubmit to change signedIn to TRUE

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dob: "1988-04-25",
      phone: "",
      street1: "",
      street2: "",
      state: "IL",
      zipCode: "",
      password: "",
      password2: "",
      date: moment()
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(e.target.value);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    postNewUser(this.state)

    // DISPATCH AN ACTION TO SET SIGNED IN TRUE
  }
  render() {
    return <div className="signUpForm">
        <div className="fuck">
          <h2 className="signUpForm__header">
            Sign up and start grilling today!
          </h2>
          <p className="signUpForm__copy">
            Please provide the requested information to create your account
            with Grillber.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-1-of-2">
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
                  
                </div>
                <div>
                  <label htmlFor="street1" className="signUpForm__label">Street address</label>
                  <input type="text" id="street1" className="signUpForm__input" onChange={this.handleChange} />
                </div>
                <div>
                  <label htmlFor="street2" className="signUpForm__label">
                    Street address 2 (optional)
                  </label>
                  <input type="text" id="street2" className="signUpForm__input" onChange={this.handleChange} />
                </div>
                <div>
                  <label htmlFor="state" className="signUpForm__label">State</label>
                  <select id="state" className="signUpForm__input signUpForm__input--state"onChange={this.handleChange}>
                    <option value="IL">IL</option>
                    <option value="MA">MA</option>
                    <option value="NY">NY</option>
                    <option value="PA">PA</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="signUpForm__label">Zip code</label>
                  <input type="text" id="zipCode" className="signUpForm__input" onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-1-of-2">
                <div>
                  <label htmlFor="phone" className="signUpForm__label">Phone number</label>
                  <input type="text" id="phone" className="signUpForm__input" onChange={this.handleChange} />
                </div>
                <div>
                  <label htmlFor="password" className="signUpForm__label">
                    Password (min 6 characters)
                  </label>
                  <input type="text" id="password" className="signUpForm__input" onChange={this.handleChange} />
                </div>
                <div>
                  <label htmlFor="password2" className="signUpForm__label">
                    Password (please re-enter)
                  </label>
                  <input type="text" id="password2" className="signUpForm__input" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn--action signUpButton">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>;
  }
}

export default SignUpForm;


// <DatePicker
//   dateFormat="YYYY/MM/DD"
//   selected={this.state.date}
//   showYearDropdown
//   scrollableYearDropdown
//   yearDropdownItemNumber={99}
//   onChange={this.handleChange}
// />;