import { MongoClient } from "mongodb";
const DB_USER = process.env.MY_DB_USERNAME;
const DB_PASSWORD = process.env.MY_DB_PASSWORD;

function MyMongoDB() {
  const myDB = {};
  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g3bcu3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const DB_NAME = "businessCardDB";
  const USER_COLLECTION = "users";

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
    } finally {
      console.log("Closing Connection");
      client.close();
    }
  };
}
