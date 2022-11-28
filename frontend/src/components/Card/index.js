// import { prototype } from "npm/lib/npm";
import "./Card.css";

const Card = ({ currentUser }) => {
    const defaultUser = {
        firstName: "Jimmy",
        lastName: "Zhang",
        email: "jimmylovewebdev@gmail.com",
        intro: "Hi, My name is Jimmy and I'm a software engineer. My current focus is taking John's web class.",
        phone: "206123456789",
        job: "Web Developer",
        location: "San Mateo, CA",
        profileImg: "/images/profile-icon1.png",
    };
    const user = currentUser === undefined ? defaultUser : currentUser;
    console.log("currentuser", currentUser);
    return (
        <>
            <div className="card text-center">
                <img
                    src={user.profileImg}
                    className="img img-responsive card-icon"
                    alt="card-icon"
                />

                <div className="card-content">
                    <div className="card-name">
                        {user.firstName + " " + user.lastName}
                        <p>{user.email}</p>
                    </div>
                    <div className="card-description">{user.intro}</div>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="card-overview">
                                <p>PHONE</p>
                                <h6>{user.phone}</h6>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="card-overview">
                                <p>JOB</p>
                                <h6>{user.job}</h6>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="card-overview">
                                <p>LOCATION</p>
                                <h6>{user.location}</h6>
                            </div>
                        </div>
                        <div className="col-xs-4 buttons-container">
                            <span>
                                <button>
                                    <img
                                        src="/images/edit-icon2.png"
                                        alt="edit-button"
                                    />
                                </button>
                                <button>
                                    <img
                                        src="/images/delete-icon.png"
                                        alt="delete-button"
                                    />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Card.protoType = {
//   firstName: prototype.string.isRequired,
//   lastName: prototype.string.isRequired,
//   email: prototype.string.isRequired,
//   intro: prototype.string.isRequired,
//   phone: prototype.string.isRequired,
//   job: prototype.string.isRequired,
//   location: prototype.string.isRequired,
//   profileImg: prototype.string.isRequired,
// };

export default Card;
