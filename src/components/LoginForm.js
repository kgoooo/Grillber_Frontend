import React, { Component } from 'react';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		
		this.state=({
			userEmail: "",
			userPassword: ""
		})
	}
	handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(e.target.value);
	}
	handleSubmit = (e) =>{
    e.preventDefault();
    // DISPATCH AN ACTION TO SET SIGNED IN TRUE
  }
	
	render() {
    return <div className="loginForm">
        <div className="loginForm__container">
          <h4 className="loginForm__header">Log in</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userEmail" className="loginForm__label">
                Email
              </label>
              <input type="text" id="userEmail" className="loginForm__input" onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="userPassword" className="loginForm__label">
                Password
              </label>
              <input type="text" id="userPassword" className="loginForm__input" onChange={this.handleChange} />
            </div>
            <div>
              <button type="submit" className="btn btn--action loginForm__button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>;
	}
}

export default LoginForm;