import React from "react";
import Navigation from "../../components/Navigation";
import LoginForm from "./LoginForm";
import Footer from "../../components/Footer";
import "./login.css";

const LoginScreen = () => {
  return (
    <>
      <Navigation />
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