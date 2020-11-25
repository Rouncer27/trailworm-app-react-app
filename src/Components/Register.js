import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Actions. //
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
// Components //
import InputField from "./FormElements/InputField";
import ForestScene from "./ForestScene";
// Helper styles //
import { standardWrapper, Btn1Green } from "../styles/helpers/index";
// Images //
import logo from "../assets/images/trailworm-app-logo.png";
import { Link, Redirect } from "react-router-dom";

const RegisterStyles = styled.div`
  position: relative;
  min-height: 80rem;
  height: 100vh;
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
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;

    @media (min-width: 768px) {
      align-items: center;
    }

    @media (min-width: 1025px) {
      padding-top: 15rem;
    }
  }

  .loginLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    max-width: 20rem;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 100%;
    }

    &__wrappper {
      max-width: 20rem;
    }
  }

  .loginForm {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    fieldset {
      padding: 0;
      border: none;
    }
  }

  .loginNav {
    width: 100%;
  }
`;

const NavButton = styled(Link)`
  ${Btn1Green};
  margin: 1rem;
`;

const FormButton = styled.button`
  ${Btn1Green};
  margin: 1rem;
`;

const Register = ({ register, isAuthenticated = false }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formFields;
    if (password !== password2)
      return setAlert("Passwords Do not match!", "danger");
    return register({ name, email, password });
  };

  const handleUpdateField = (e) => {
    setFormFields((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // redirect is loggedin
  if (isAuthenticated) {
    return <Redirect to="/get-started" />;
  }

  return (
    <RegisterStyles>
      <div className="wrapper">
        <div className="loginLogo">
          <div className="loginLogo__wrappper">
            <img src={logo} alt="The Trailworm App" />
          </div>
        </div>
        <div className="loginForm">
          <form onSubmit={handleOnSubmit}>
            <fieldset>
              <InputField
                type="text"
                label="username"
                id="name"
                value={formFields.name}
                handleUpdateField={handleUpdateField}
              />
              <InputField
                type="email"
                label="email"
                id="email"
                value={formFields.email}
                handleUpdateField={handleUpdateField}
              />
              <InputField
                type="password"
                label="password"
                id="password"
                value={formFields.password}
                handleUpdateField={handleUpdateField}
              />
              <InputField
                type="password"
                label="confirm password"
                id="password2"
                value={formFields.password2}
                handleUpdateField={handleUpdateField}
              />
              <div>
                <FormButton type="submit">Sign up</FormButton>
              </div>
            </fieldset>
          </form>
          <div className="loginNav">
            <nav>
              <NavButton to="/login">Already have an account?</NavButton>
              <NavButton to="/get-started">Just visiting</NavButton>
            </nav>
          </div>
        </div>
      </div>
      <ForestScene isHome={false} />
    </RegisterStyles>
  );
};

Register.propTypes = {};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
