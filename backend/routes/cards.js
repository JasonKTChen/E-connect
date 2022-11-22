// Kuan Tsa Chen
import express from "express";
import myDB from "../db/cardDB.js";

const cardrouter = express.Router();

// create
cardrouter.post("/createMyCard", async (req, res) => {
  const card = req.body;
  card.username = "jimmy";
  // console.log("card:", card);
  // req.session.user = "jason";
  // console.log("current user in createcard", req.session.user);

  const ret = await myDB.createCard("jimmy", card);
  if (ret) {
    res.send("successful");
  } else {
    res.send("failure");
  }
});

// read
cardrouter.get("/getMyCards", async (req, res) => {
  // const current = req.session.user;
  const current = "jimmy";
  const flag = "mine";
  if (current !== undefined) {
    const ret = await myDB.fetchingCards(current, flag);
    if (ret) {
      console.log("success");
      res.send(ret);
    } else {
      console.log("fail");
      res.send({});
    }
  }
});

cardrouter.get("/getOtherCards", async (req, res) => {
  // const current = req.session.user;
  const current = "jimmy";
  const flag = "other";
  if (current !== undefined) {
    const ret = await myDB.fetchingCards(current, flag);
    res.send(ret);
  } else {
    res.send({});
  }
});

// update
cardrouter.post("/updateCard", async (req, res) => {
  // const currentUser = req.session.user;
  const currentUser = "jimmy";
  const card = req.body;

  if (currentUser !== undefined) {
    const ret = await myDB.updateCard(currentUser, card);
    if (ret) {
      console.log("update fetch successful");
    } else {
      console.log("update fetch failure");
    }
    res.json(ret);
  } else {
    console.log("User undefined");
    res.json({});
  }
});

// delete
cardrouter.post("/deleteCard", async (req, res) => {
  const id = req.body.id;
  console.log("id:", id);
  // const currentUser = req.session.user;
  const currentUser = "jimmy";

  if (currentUser !== undefined) {
    const ret = await myDB.deleteCard(currentUser, id);
    if (ret) {
      console.log("delete fetch successful");
    } else {
      console.log("delete fetch failure");
    }
    res.json(ret);
  } else {
    console.log("User undefined");
    res.json({});
  }
});

export default cardrouter;
