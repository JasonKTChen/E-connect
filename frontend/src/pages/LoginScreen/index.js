//Chun-Wei Tseng

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/Navigation";
import LoginForm from "./LoginForm.js";
import Footer from "../../components/Footer";
import "./login.css";

const LoginScreen = () => {
  return (
    <>
      <Navigation />
      <div className="login-screen">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
