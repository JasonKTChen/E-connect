import "./profile.css";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const ProfileScreen = () => {
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
              <span class="font-weight-bold">Brian</span>
              <span class="text-black-50">Brian123@gmail.com</span>
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
                    value=""
                  ></input>
                </div>
                <div class="col-md-6">
                  <label class="labels">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="last name"
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
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 1</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 1"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 2</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Postcode</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter postcode"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">State</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter state"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter country"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email"
                    value=""
                  ></input>
                </div>
                <div class="col-md-12">
                  <label class="labels">Education</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="education"
                    value=""
                  ></input>
                </div>
              </div>

              <div class="mt-5 text-center">
                <button
                  class="btn btn-primary profile-button mx-1"
                  type="button"
                >
                  Save Profile
                </button>
                <button class="btn btn-danger mx-1" type="button">
                  Delete user
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <div class="col-md-12">
                <label class="labels">Previous Experience</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                ></input>
              </div>
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                ></input>
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
