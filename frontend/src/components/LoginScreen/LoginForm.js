// import React, { useState } from "react";
import "./login.css";

function LoginForm() {
  // const [user, setUser] = useState({});

  function handleClick() {}

  return (
    <>
      <form id="login-form" action="/login" method="post">
        <div className="form-group">
          <label for="loginName">Name:</label>
          <input
            type="text"
            className="form-control"
            id="loginName"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="form-group">
          <label for="loginPassword">Password:</label>
          <input
            type="text"
            className="form-control"
            id="loginPassword"
            placeholder="Enter Password"
          ></input>
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
