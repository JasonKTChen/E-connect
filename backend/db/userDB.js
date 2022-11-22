import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
// require("dotenv").config();

function MyMongoDB() {
    const myDB = {};
    const url = process.env.MONGO_URL || "mongodb://localhost:27017";
    const DB_NAME = "E-Connect";
    const USER_COLLECTION = "users";

    //Chun-Wei Tseng
    myDB.authenticate = async (user) => {
        let client;

        try {
            client = new MongoClient(url);
            client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            console.log("searching for", user);
            const res = await usersCol.findOne({ username: user.loginName });
            console.log("res", res);

            if (res) {
                if (res.password === user.loginPassword) {
                    console.log("true");
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.log("authenticate error", e);
            throw e;
        } finally {
            console.log("authenticate Closing Connection");
            client.close();
        }
    };

    myDB.createUser = async (user) => {
        let client = new MongoClient(url);
        client.connect();
        try {
            client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            console.log("creating user", user);
            const res = await usersCol.findOne({
                $or: [
                    { name: user.name },
                    { username: user.username },
                    { email: user.email },
                ],
            });

            console.log("return-------------", res);
            if (res) {
                console.log("User Already Exist");
                return true;
            }
            usersCol.insertOne(user);
            console.log("User Added!");
            console.log("Insert Complete:", user);
            const d = await usersCol.findOne({ name: user.name });
            console.log("check if user added", d);
            return false;
        } finally {
            console.log("Closing Connection");
            client.close();
        }
    };

    myDB.getUser = async (_email) => {
        let client;
        try {
            client = new MongoClient(url);
            client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            const res = await usersCol.findOne({ email: _email });
            return res;
        } finally {
            client.close();
        }
    };

    return myDB;
}

export default MyMongoDB();
