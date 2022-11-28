//Chun-Wei Tseng

import React, { useState } from "react";
import "./login.css";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Start login process");
        console.log(username, password);
        let user = {};
        user.username = username;
        user.password = password;

        await fetch("/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h1>add image here</h1>
                </div>
                <div className="col-6">
                    <h1>Wellcome to E-Connect</h1>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <h2 id="login-form-title">Login</h2>
                        <div className="form-group">
                            <label
                                className="login-input-label"
                                for="loginName"
                            >
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
                            <label
                                className="login-input-label"
                                for="loginPassword"
                            >
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
                </div>
            </div>
        </>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
