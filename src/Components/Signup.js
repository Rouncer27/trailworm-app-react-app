import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Btn1Green } from "../styles/helpers/index";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";

import InputField from "./FormElements/InputField";

const ButtonsStyles = css`
  ${Btn1Green};
  width: 100%;
  margin: 1rem auto;

  @media (max-width: 767px) {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    width: auto;
    margin: 1rem auto;
  }
`;

const StyledLink = styled(Link)`
  ${ButtonsStyles}
`;

const FormButton = styled.button`
  ${ButtonsStyles}
`;

const SignupStyled = styled.div`
  position: absolute;
  top: 20rem;
  right: 2rem;
  left: 2rem;
  transition: all 0.75s ease-out;
  transform: ${(props) =>
    props.isActive ? "translate(0%, 0%)" : "translate(0%, 150%)"};
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  z-index: 100;

  @media (min-width: 768px) {
    top: 55%;
    right: auto;
    left: 63.5%;
    transform: ${(props) =>
      props.isActive ? "translate(-50%, -50%)" : "translate(-50%, 150%)"};
  }

  @media (min-width: 1025px) {
    width: calc(50%);
  }

  fieldset {
    padding: 0;
    border: none;
  }
`;

const Signup = ({ setAlert, isActive, register, isAuthenticated = false }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleOnSubmitSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formFields;
    if (password !== password2)
      return setAlert("Passwords Do not match!", "danger");
    return register({ name, email, password });
    // if (whatsActive === "login") return login(email, password);
  };

  const handleUpdateField = (e) => {
    setFormFields((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <SignupStyled isActive={isActive}>
      <div>
        <form onSubmit={handleOnSubmitSignup}>
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
              <FormButton type="submit">Sign Up</FormButton>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="switchButtons">
        <div>
          <StyledLink to="/login">Already have an account?</StyledLink>
        </div>
        <div>
          <StyledLink to="/get-started">Just visiting</StyledLink>
        </div>
      </div>
    </SignupStyled>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
