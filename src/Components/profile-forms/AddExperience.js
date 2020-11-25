import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addExperience } from "../../actions/profile";
import styled from "styled-components";
import InputField from "../FormElements/InputField";
import { Btn1Green, H1White, standardWrapper } from "../../styles/helpers";

const AddExperienceStyled = styled.div`
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

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleUpdateField = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { title } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <AddExperienceStyled>
      <div className="wrapper">
        <div className="formContainer">
          <div className="formTitle">
            <h2>Add Your Experience</h2>
          </div>
          <form onSubmit={handleOnSubmit}>
            <fieldset>
              <InputField
                type="text"
                label="Title"
                id="title"
                value={title}
                handleUpdateField={handleUpdateField}
              />
              <div>
                <button type="submit">Add Experience</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="editNav">
          <Link to="/dashboard">Go Back</Link>
        </div>
      </div>
    </AddExperienceStyled>
  );
};

export default connect(null, { addExperience })(withRouter(AddExperience));
