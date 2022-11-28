// Chun-Wei Tseng

import "./profile.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";

const ProfileScreen = (currentUser) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [addressLOne, setAddressLOne] = useState("");
    const [addressLTwo, setAddressLTwo] = useState("");
    const [postcode, setPostcode] = useState("");
    const [addressState, setAddressState] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [education, setEducation] = useState("");

    async function handleDeleteUser(e) {
        e.preventDefault();
        console.log("Start deleting User");
        try {
            let user = {};
            user.username = currentUser.username;
            console.log("User to be deleted: ", user);
            const res = await fetch("/deleteUser", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            }).catch((err) => {
                console.log(err);
            });
            if (res) {
                console.log("User is successfully deleted");
                // redirect to sign up page
            } else {
                console.log("User delete failed, please try again");
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function handleSaveProfile(e) {
        e.preventDefault();
        console.log("Start Saving Profile");
        try {
            let user = {};
            user.firstname = firstName;
            user.lastname = lastName;
            user.phone = phoneNumber;
            user.addressLOne = addressLOne;
            user.addressLTwo = addressLTwo;
            user.postcode = postcode;
            user.addressState = addressState;
            user.country = country;
            user.email = email;
            user.education = education;
            console.log("Saving profile of", user);
            await fetch("/saveProfile", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            }).catch((err) => {
                console.log(err);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="profile-screen">
            <Navigation />
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                class="rounded-circle mt-5"
                                width="150px"
                                src="/images/profile-icon1.png"
                                alt="profile-icon"
                            ></img>
                            <span class="font-weight-bold">
                                {currentUser.name}
                            </span>
                            <span class="text-black-50">
                                {currentUser.email}
                            </span>
                            <span> </span>
                        </div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label class="labels">Fisrt Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="first name"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        value={firstName}
                                    ></input>
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">Last Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="last name"
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        value={lastName}
                                    ></input>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Phone</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter phone number"
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        value={phoneNumber}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Address Line 1</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter address line 1"
                                        onChange={(e) =>
                                            setAddressLOne(e.target.value)
                                        }
                                        value={addressLOne}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Address Line 2</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter address line 2"
                                        onChange={(e) =>
                                            setAddressLTwo(e.target.value)
                                        }
                                        value={addressLTwo}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Postcode</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter postcode"
                                        onChange={(e) =>
                                            setPostcode(e.target.value)
                                        }
                                        value={postcode}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">State</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter state"
                                        onChange={(e) =>
                                            setAddressState(e.target.value)
                                        }
                                        value={addressState}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Country</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter country"
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                        value={country}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    ></input>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Education</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="education"
                                        onChange={(e) =>
                                            setEducation(e.target.value)
                                        }
                                        value={education}
                                    ></input>
                                </div>
                            </div>

                            <div class="mt-5 text-center">
                                <button
                                    class="btn btn-primary profile-button mx-1"
                                    type="button"
                                    onClick={handleSaveProfile}
                                >
                                    Save Profile
                                </button>
                                <button
                                    class="btn btn-danger mx-1"
                                    type="button"
                                    onClick={handleDeleteUser}
                                >
                                    Delete user
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ProfileScreen;
