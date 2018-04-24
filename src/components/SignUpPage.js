import React from 'react';
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
	return <div className="signUpP">
      <SignUpForm />
      <p className="signUpP__copy">Already signed up? <Link to="/login">Log in</Link>!</p>
    </div>;
};

export default SignUpPage;