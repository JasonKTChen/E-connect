import React from 'react';
import Navigation from '../Navigation';
import SignUpForm from './SignUpForm';
import Footer from '../Footer';
import './signup.css';

const SignupScreen = () => {
  return (
    <>
      <Navigation />
      <div className="signup-screen">
        <h1>Wellcome to E-Connect</h1>
        <h2>Sign Up</h2>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default SignupScreen;
