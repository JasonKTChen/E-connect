import React, { useState } from "react";
import "./signup.css";

function SignUpForm() {
  const [user, setUser] = useState({});

  function confirmPassword() {}

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>Wellcome to E-Connect</h1>
          <h2>Sign Up</h2>
          <form id="signup-form" action="/register" method="post">
            <div className="form-group">
              <label for="signUpName">Name:</label>
              <input
                type="text"
                className="form-control"
                id="signUpName"
                placeholder="Enter Name"
              ></input>
            </div>
            <div className="form-group">
              <label for="signUpEmail">Email:</label>
              <input
                type="email"
                className="form-control"
                id="SignUpEmail"
                placeholder="Enter Email"
              ></input>
            </div>
            <div className="form-group">
              <label for="signUpPassword">Password:</label>
              <input
                type="text"
                className="form-control"
                id="signUpPassword"
                placeholder="Enter Password"
              ></input>
            </div>
            <div className="form-group">
              <label for="confirmPassword">
                Please re-enter your password:
              </label>
              <input
                onChange={confirmPassword}
                type="text"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="col-6">add image here</div>
      </div>
    </>
  );
}

export default SignUpForm;
