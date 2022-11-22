//Chun-Wei Tseng

import Navigation from "../Navigation";
import Footer from "../Footer";

const Profile = ({ currentUser }) => {
    const handleEditPassword = () => {
        console.log("Start Edit Password");
    };

    const handleDeleteUser = () => {};

    return (
        <div>
            <Navigation></Navigation>
            <h2> Hi {currentUser.name}</h2>
            <div class="container">
                <div class="row">
                    <div class="col-sm">User Name</div>
                    <div class="col-sm">currentUser.username</div>
                </div>
                <div class="row">
                    <div class="col-sm">Password</div>
                    <div class="col-sm">
                        <button
                            id="button-edit-password"
                            onClick={handleEditPassword}
                        >
                            Edit Password
                        </button>
                    </div>
                </div>
                <button id="button-delete-user" onClick={handleDeleteUser}>
                    Delete User
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};
