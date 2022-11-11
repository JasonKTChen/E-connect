import React from 'react';
import Navbar from '../Navbar';
import LoginForm from './LoginForm';
import Footer from '../Footer';

const LoginScreen = () => {
  return (
    <>
      <Navbar />
      <div className="login-screen">
        <h1>Wellcome to E-Connect</h1>
        <h2>Login</h2>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginScreen;
