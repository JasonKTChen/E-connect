//Chun-Wei Tseng

import express from "express";
import myDB from "../db/userDB";
const loginrouter = express.Router();

loginrouter.post("/login", async (req, res) => {
    console.log("Login in progress");
    const user = req.body;
    console.log(user);
    const mongoResponse = await myDB.authenticate(user);
    if (mongoResponse === true) {
        req.session.user = user.loginName;
    }
    res.json({ user: user.loginName, isLoggedIn: mongoResponse });
});

loginrouter.get("/getusers", function (req, res) {
    console.log("getusers get session", req.session.user);
    res.json({ user: req.session.user });
});
