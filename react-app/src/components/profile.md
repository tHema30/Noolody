import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ handleLogout, handleUpdateProfile, userName }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Your form submission logic goes here
  };

  const validateFullName = (value) => {
    // Your validation logic for full name goes here
  };

  const validateBio = (value) => {
    // Your validation logic for bio goes here
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary">Welcome, {userName}</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src={require("../assets/img/userprofile1.png")}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </div>
        </div>
        <div className="col-md-9 personal-info">
          
          <form className="form-horizontal" role="form" onSubmit={onSubmit}>
            {/* ... your existing code ... */}
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Options
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="#" onClick={handleUpdateProfile}>
                      Update Profile
                    </Link>
                    <Link className="dropdown-item" to="#" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
