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
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default SignupScreen;
