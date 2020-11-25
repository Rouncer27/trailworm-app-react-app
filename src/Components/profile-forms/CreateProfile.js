import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";
import InputField from "../FormElements/InputField";
import styled from "styled-components";
import { Btn1Green, H1White, standardWrapper } from "../../styles/helpers";

const CreateProfileStyled = styled.div`
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

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    skills: "",
    bio: "",
    location: "",
  });

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
    createProfile(formData, history);
  };

  return (
    <CreateProfileStyled>
      <div className="wrapper">
        <div className="formContainer">
          <div className="formTitle">
            <h2>Add Your Profile</h2>
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
    </CreateProfileStyled>
  );
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
