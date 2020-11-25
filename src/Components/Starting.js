import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// Helper Styles //
import { standardWrapper, H1White, B1LgtBlack } from "../styles/helpers";
// Images //
import logo from "../assets/images/trailworm-app-logo.png";
import Compass from "./UIElements/Icons/Compass";
import Tent from "./UIElements/Icons/Tent";
import Deer from "./UIElements/Icons/Deer";
import { Link } from "react-router-dom";
import ForestSceneStart from "./ForestSceneStart";

const StartingStyled = styled.section`
  position: relative;
  min-height: 80rem;
  height: 100vh;
  background-image: linear-gradient(
    59deg,
    #1a6a4e 0%,
    #b2cccc 81%,
    #95c5c1 88%,
    #7fbfb9 95%,
    #77beb6 100%
  );

  .wrapper {
    ${standardWrapper};
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;

    @media (min-width: 768px) {
      align-items: center;
    }
  }

  .contentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 500;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h2 {
      ${H1White};
    }
  }

  .logoContainer {
    width: 100%;
    max-width: 20rem;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 100%;
    }

    &__wrapper {
      @media (min-width: 768px) {
        max-width: 30rem;
        margin-right: 10rem;
        margin-left: auto;
      }
    }
  }

  .navContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 2.5rem;
    border-top: 0.75rem solid var(--color-tert);

    @media (min-width: 768px) {
      width: calc(50%);
      margin-right: 0;
      margin-left: auto;
      margin-top: -15rem;
    }

    &__iconSet {
      min-width: 10rem;
      position: relative;
      padding-bottom: 3rem;
      text-align: center;

      a {
        display: block;
        width: 100%;
      }

      span {
        ${B1LgtBlack};
        width: 100%;
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const Starting = ({ isAuthenticated }) => {
  return (
    <StartingStyled>
      <div className="wrapper">
        <div className="logoContainer">
          <div className="logoContainer__wrapper">
            <img src={logo} alt="The Trailworm App" />
          </div>
        </div>
        <div className="contentContainer">
          <div>
            <h2>
              For all of those who want to follow a path but not the crowd.
            </h2>
          </div>
        </div>
        <div className="navContainer">
          {isAuthenticated && (
            <div className="navContainer__iconSet">
              <Link to="/dashboard">
                <Compass />
                <span>My Profile</span>
              </Link>
            </div>
          )}
          <div className="navContainer__iconSet">
            <Link to="camping">
              <Tent />
              <span>Camping</span>
            </Link>
          </div>
          <div className="navContainer__iconSet">
            <Link to="/trails">
              <Deer />
              <span>Trails</span>
            </Link>
          </div>
        </div>
      </div>
      <ForestSceneStart />
    </StartingStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Starting);
