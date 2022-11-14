import React from 'react';
import Navigation from '../Navigation';
import LoginForm from './LoginForm';
import Footer from '../Footer';
import './login.css';

const LoginScreen = () => {
  return (
    <>
      <Navigation />
      <div className="login-screen">
        <h2>Login</h2>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginScreen;
