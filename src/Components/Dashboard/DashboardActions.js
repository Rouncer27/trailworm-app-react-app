import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn1Green } from "../../styles/helpers";

const DashboardActionsStyled = styled.div`
  width: 100%;

  a {
    ${Btn1Green};
    margin: 0 1rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const DashboardActions = () => {
  return (
    <DashboardActionsStyled>
      <Link to="/edit-profile">Edit Profile</Link>
      <Link to="/add-experience">Add Experience</Link>
    </DashboardActionsStyled>
  );
};

export default DashboardActions;
