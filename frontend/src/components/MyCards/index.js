import { useState, useEffect } from "react";
import "./MyCards.css";
import Card from "../Card";

const MyCards = () => {
  const defaultUser = [
    {
      firstName: "Jimmy",
      lastName: "Zhang",
      email: "jimmylovewebdev@gmail.com",
      intro:
        "Hi, My name is Jimmy and I'm a software engineer. My current focus is taking John's web class.",
      phone: "206123456789",
      job: "Web Developer",
      location: "San Mateo, CA",
      profileImg: "/images/profile-icon1.png",
      userName: "jimmy",
      id: "jimmy1",
    },
    {
      profileImg: "",
      firstName: "wanye",
      lastName: "tseng",
      email: "@@@",
      intro: "3",
      phone: "3",
      job: "3",
      location: "3",
      userName: "jimmy",
      id: "jimmy1",
    },
    {
      profileImg: "",
      firstName: "jason",
      lastName: "chen",
      email: "123@gmail.com",
      intro: "555",
      phone: "55",
      job: "555",
      location: "555",
      userName: "jimmy",
      id: "jimmy2",
    },
    {
      profileImg: "",
      firstName: "bob",
      lastName: "lin",
      email: "@",
      intro: "44",
      phone: "444",
      job: "44",
      location: "444",
      userName: "jimmy",
      id: "jimmy3",
    },
  ];
  const [cards, setCards] = useState(defaultUser);
  const [user, setUser] = useState({});
  const [isDefault, setIsDefault] = useState(true);

  // check if user logged in
  const getProfile = () => {
    fetch("/getuser")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        setUser(null);
      });
  };

  const populateCards = () => {
    if (user !== null) {
      fetch("/getMyCards")
        .then((res) => res.json())
        .then((item) => {
          console.log("fetching success");
          setCards(item);
          setIsDefault(false);
        })
        .catch(() => {
          console.log("fetching error");
        });
    } else {
      console.log("use default users");
      // setCards(defaultUser);
    }
  };
  useEffect(getProfile, []);
  useEffect(populateCards, [user]);
  return (
    <>
      <div className="row py-3 mx-5">
        <h3 className="p-3">Your Cards</h3>
        {cards.map((items) => (
          <div className="col-sm-3">
            <Card currentUser={items} />
          </div>
        ))}
        {isDefault ? <h2>These are default cards</h2> : null}
      </div>
    </>
  );
};

export default MyCards;
