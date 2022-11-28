// Chun-Wei Tseng

import express from "express";
import UserDB from "../db/userDB";
const profilerouter = express.Router();

profilerouter.post("/saveProfile", async (req, res) => {
    console.log("Update Profile in progress - router");
    try {
        const user = JSON.parse(req.body);
        const ret = await UserDB.updateUser(user);
        console.log("Profile Update Successfully");
        res.json({ isUpdated: ret });
    } catch (e) {
        console.log(e);
    }
});

profilerouter.post("/deleteUser", async (req, res) => {
    console.log("Delete user in progress - router");
    try {
        const user = JSON.parse(req.body);
        const ret = await UserDB.deleteUser(user);
        if (ret) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    } catch (e) {
        console.log(e);
    }
});

export default profilerouter;
