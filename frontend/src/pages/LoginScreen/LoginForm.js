//Chun-Wei Tseng

import React, { useState } from "react";
import "./login.css";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(username, password);
    };

    return (
        <>
            <form
                id="login-form"
                onSubmit={handleSubmit}
                action="/login"
                method="post"
            >
                <h2 id="login-form-title">Login</h2>
                <div className="form-group">
                    <label className="login-input-label" for="loginName">
                        Name:
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="form-control login-input"
                        id="loginName"
                        name="loginName"
                        placeholder="Enter Name"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label className="login-input-label" for="loginPassword">
                        Password:
                    </label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="form-control login-input"
                        id="loginPassword"
                        name="loginPassword"
                        placeholder="Enter Password"
                        required
                    ></input>
                </div>
                <button id="login-button" className="btn btn-primary">
                    Login
                </button>
            </form>
        </>
    );
}

export default LoginForm;
