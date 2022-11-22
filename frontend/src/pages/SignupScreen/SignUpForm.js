//Chun-Wei Tseng

import React, { useState } from "react";
import "./signup.css";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);

    function handleSetPassword(e) {
        setPassword(e.target.value);
    }

    function handdleSetPasswordTwo(e) {
        setPasswordTwo(e.target.value);
        console.log(`password2 is equal to`, passwordTwo);
        if (password === passwordTwo) {
            setIsConfirmPassword(true);
        } else {
            setIsConfirmPassword(false);
        }
    }

    // const handleRegister = async (evt)=>{
    //   evt.preventDefault();
    //   try{
    //     await registerUser();

    //   }
    // }

    return (
        <>
            <form
                id="signup-form"
                action="/signup"
                method="post"
                // onSubmit={handleRegister}
            >
                <h2 id="register-title">Sign Up</h2>
                <div className="form-group">
                    <label className="signup-input-label" for="signUpName">
                        Name:
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control signup-input"
                        id="signUpName"
                        name="signUpName"
                        placeholder="Enter Name"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label className="signup-input-label" for="signUpEmail">
                        Email:
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control signup-input"
                        id="signUpEmail"
                        name="signUpEmail"
                        placeholder="Enter Email"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label className="signup-input-label" for="signUpPassword">
                        Password:
                    </label>
                    <input
                        onChange={handleSetPassword}
                        type="password"
                        className="form-control signup-input"
                        id="signUpPassword"
                        name="signUpPassword"
                        placeholder="Enter Password"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label className="signup-input-label" for="confirmPassword">
                        Please re-enter your password:
                    </label>
                    <input
                        onChange={handdleSetPasswordTwo}
                        style={{
                            backgroundColor: isConfirmPassword
                                ? "white"
                                : "pink",
                        }}
                        type="password"
                        className="form-control signup-input"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    ></input>
                </div>
                <button
                    id="register-button"
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </>
    );
}

export default SignUpForm;
