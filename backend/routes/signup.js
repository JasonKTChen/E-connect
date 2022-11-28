// Chun-Wei Tseng

import express from "express";
import UserDB from "../db/userDB";
import bcrypt from "bcryptjs";
const signuprouter = express.Router();

signuprouter.post("/signup", async (req, res) => {
    console.log("Sign up in progress");
    try {
        const user = req.body;
        const password = user.password;
        const hash = await bcrypt.hash(password, 10);
        const ret = await UserDB.createUser({
            username: user.username,
            email: user.email,
            password: hash,
        });
        console.log("ret", ret);
        if (ret) {
            res.send("User already exist");
            //Go to Login page after timeoput of 2 second
        } else {
            res.send("Register successful");
            //Go to Login page after timeoput of 2 second
        }
        res.json({ isRegistered: ret });
    } catch (e) {
        console.log(e);
    }
});

export default signuprouter;
