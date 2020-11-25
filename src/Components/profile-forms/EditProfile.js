import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Btn1Green, standardWrapper, H1White } from "../../styles/helpers";

import InputField from "../FormElements/InputField";

const EditProfileStyles = styled.div`
  position: relative;
  min-height: 80rem;
  height: 100vh;
  padding-top: 10rem;
  background-image: linear-gradient(
    61deg,
    #292645 -1%,
    #242545 31%,
    #182545 63%,
    #032545 96%,
    #002545 101%
  );

  .wrapper {
    ${standardWrapper};
  }

  .formContainer {
    width: 100%;

    .formTitle {
      width: 100%;
      padding-left: 1rem;

      h2 {
        ${H1White};
      }
    }

    fieldset {
      border: none;
    }

    button {
      ${Btn1Green};
    }
  }

  .editNav {
    width: 100%;
    margin-top: 5rem;
    padding-left: 1rem;

    a {
      ${Btn1Green};
    }
  }
`;

const EditProfile = ({
  createProfile,
  history,
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  const [formData, setFormData] = useState({
    skills: "",
    bio: "",
    location: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      skills: loading || !profile.skills ? "" : profile.skills,
      bio: loading || !profile.bio ? "" : profile.bio,
      location: loading || !profile.location ? "" : profile.location,
    });
  }, [loading]);

  const handleUpdateField = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { skills, bio, location } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <EditProfileStyles>
      <div className="wrapper">
        <div className="formContainer">
          <div className="formTitle">
            <h2>Edit Your Profile</h2>
          </div>
          <form onSubmit={handleOnSubmit}>
            <fieldset>
              <InputField
                type="text"
                label="Skills"
                id="skills"
                value={skills}
                handleUpdateField={handleUpdateField}
              />
              <InputField
                type="text"
                label="Bio"
                id="bio"
                value={bio}
                handleUpdateField={handleUpdateField}
              />
              <InputField
                type="text"
                label="Location"
                id="location"
                value={location}
                handleUpdateField={handleUpdateField}
              />
              <div>
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="editNav">
          <Link to="/dashboard">Go Back</Link>
        </div>
      </div>
    </EditProfileStyles>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
