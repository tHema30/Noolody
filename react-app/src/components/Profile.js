import React from "react";
import { Link } from "react-router-dom";



const Profile = () => {
  const onSubmit = (event) => {
    event.preventDefault();
 // Your form submission logic goes
    console.log("Form submitted");
  };

  const validateFullName = (value) => {
    if (!value) {
      return "Full Name is required";
    }

    // You can add more specific validation rules for the full name

    return true;
  };
  const [errors, setErrors] = React.useState({});

  const validateBio = (value) => {
    if (!value) {
      return "Bio is required";
    }

    // You can add more specific validation rules for the bio

    return true;
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary">Edit Profile</h1>
      <hr />
      <div className="row">
        {/* left column */}
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

        {/* edit form column */}
        <div className="col-md-9 personal-info">
          <div className="alert alert-info alert-dismissable">
            <a
              className="panel-close close"
              data-dismiss="alert"
            >
              ×
            </a>{" "}
            <i className="fa fa-coffee" /> This is an <strong>.alert</strong>. Use
            this to show important messages to the user.
          </div>
          <h3>Personal info</h3>
          <form className="form-horizontal" role="form" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="col-lg-3 control-label">Full Name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  defaultValue="Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">User name:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="user name"
                  ref={(input) =>
                    input &&
                    !input.validity.valid &&
                    errors.fullName &&
                    input.focus()
                  }
                  defaultValue=""
                  onBlur={(e) =>
                    validateFullName(e.target.value) !== true &&
                    (errors.fullName = { message: validateFullName(e.target.value) })
                  }
                />
                {errors.fullName && <span>{errors.fullName.message}</span>}
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 class="panel-title">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label class="col-sm-2 control-label">Current password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label class="col-sm-2 control-label">New password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <div class="checkbox">
                      <input type="checkbox" id="checkbox_1" />
                      <label for="checkbox_1">Make this account public</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-default">
                      Submit
                    </button>
                   
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