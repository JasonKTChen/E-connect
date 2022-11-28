// Chun-Wei Tseng

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });
const DB_USER = process.env.MY_DB_USERNAME;
const DB_PASSWORD = process.env.MY_DB_PASSWORD;
const DB_NAME = process.env.MY_DB_NAME;
// const DB_USER = "jason";
// const DB_PASSWORD = "1234";
// const DB_NAME = "E-connect";
function UserDB() {
    const UserDB = {};
    const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g3bcu3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const USER_COLLECTION = "user";
    UserDB.authenticate = async (user) => {
        let client;
        console.log("start useDB");
        try {
            client = new MongoClient(url);
            await client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            console.log("searching for", user);
            const res = await usersCol.findOne({ username: user.username });
            console.log("res", res);
            if (res) {
                const validUser = await bcrypt.compare(user.password, res.hash);
                if (validUser) {
                    console.log("true");
                    return true;
                }
            }
            console.log("Login failed");
            return false;
        } catch (e) {
            console.log(e);
        } finally {
            console.log("Closing Connection");
            await client.close();
        }
    };
    UserDB.createUser = async (user) => {
        let client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            console.log("creating user", user);
            const res = await usersCol.findOne({
                $or: [{ username: user.username }, { email: user.email }],
            });

            console.log("return-------------", res);
            if (res) {
                console.log("User Already Exist");
                return true;
            }
            usersCol.insertOne({
                username: user.username,
                email: user.email,
                password: user.password,
                firstname: "",
                lastname: "",
                phone: "",
                addressLOne: "",
                addressLTwo: "",
                postcode: "",
                addressState: "",
                country: "",
                education: "",
            });
            console.log("User Added!");
            console.log("Insert Complete:", user);
            const d = await usersCol.findOne({ username: user.username });
            console.log("check if user added", d);
            return false;
        } finally {
            console.log("Closing connection to UserDB");
            client.close();
        }
    };

    UserDB.getUser = async (_email) => {
        let client;
        try {
            client = new MongoClient(url);
            client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            const res = await usersCol.findOne({ email: _email });
            return res;
        } finally {
            console.log("Closing connection to UserDB");
            client.close();
        }
    };

    UserDB.deleteUser = async (currentUser) => {
        let client;
        client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            const query = { username: currentUser.username };

            await usersCol.deleteOne(query);
            const res = usersCol.findOne(query);
            if (res) {
                console.log("Failed deleting the user");
                return false;
            } else {
                console.log("Successfully deleting the user");
                return true;
            }
        } finally {
            console.log("Closing connection to UserDB");
            await client.close();
        }
    };

    UserDB.updateUser = async (currentUser) => {
        let client;
        client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db(DB_NAME);
            const usersCol = db.collection(USER_COLLECTION);
            const query = { username: currentUser.username };
            await usersCol.updateOne(query, {
                $set: {
                    firstname: currentUser.firstname,
                    lastname: currentUser.lastname,
                    phone: currentUser.phone,
                    addressLOne: currentUser.addressLOne,
                    addressLTwo: currentUser.addressLTwo,
                    postcode: currentUser.postcode,
                    addressState: currentUser.addressState,
                    country: currentUser.country,
                    email: currentUser.email,
                    education: currentUser.education,
                },
            });
            console.log("Update complete");
            return true;
        } catch (e) {
            console.log(e);
            return false;
        } finally {
            console.log("Closing connection to UserDB");
            await client.close();
        }
    };

    return UserDB;
}

export default UserDB;
