//Chun-Wei Tseng

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/Navigation";
import LoginForm from "./LoginForm";
import Footer from "../../components/Footer";
import "./login.css";

function LoginScreen() {
    // useEffect(()=>{
    //     const authentication = async ()=>{
    //         const response = await fetch("/login")
    //         const
    //     }
    // })

    return (
        <>
            <Navigation />
            <div className="login-screen">
                <h1>Wellcome to E-Connect</h1>
                <LoginForm />
            </div>
            <Footer />
        </>
    );
}

LoginScreen.propTypes = {};
// children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
// ]).isRequired,

export default LoginScreen;
