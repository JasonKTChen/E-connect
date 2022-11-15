import React from "react";
import Navigation from "../../components/Navigation";
import SignUpForm from "./SignUpForm";
import Footer from "../../components/Footer";
import "./signup.css";

const SignupScreen = () => {
  return (
    <>
      <Navigation />
      <div className="signup-screen">
        <h1>Wellcome to E-Connect</h1>
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default SignupScreen;
