import express from "express";
import myDB from "../db/userDB";
const signuprouter = express.Router();

signuprouter.post("/signup", async (req, res) => {
    console.log("Sign up in progress");
    const user = req.body;
    const ret = await myDB.createUser({
        name: user.signupName,
        email: user.signupEmail,
        password: user.signupPassword,
    });
    console.log("ret", ret);
    res.json({ isRegistered: ret });
});
