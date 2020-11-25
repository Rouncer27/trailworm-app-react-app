// NPM Packages. //
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions. //
import { logout } from "../actions/auth";
// Style Helpers //
import { B1White } from "../styles/helpers";

// Images. //
import logoHorizontal from "../assets/images/trailworm-horizontal.png";

const NavigationStyled = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: var(--color-lgt-black);
  z-index: 99999;

  .menuToggle {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 500;

    @media (min-width: 768px) {
      width: 75%;
    }
  }

  button {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: 0.5rem;
    left: -0.3rem;
    cursor: pointer;
    opacity: 0;
    z-index: 600;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 500;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    ${(props) =>
      props.isOpen
        ? "opacity: 1; transform: rotate(45deg) translate(-2px, -8px);  background: #232323;"
        : null};

    &.span-1 {
      transform-origin: 0% 0% !important;
    }

    &.span-2 {
      transform-origin: 0% 100% !important;
      ${(props) =>
        props.isOpen
          ? "transform: rotate(-45deg) translate(-1px, 7px);"
          : null};
    }

    &.span-3 {
      ${(props) =>
        props.isOpen
          ? "opacity: 0; transform: rotate(0deg) scale(0.2, 0.2);"
          : null};
    }
  }

  .menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: -2rem;
    left: -2rem;
    width: 50vw;
    min-width: 30rem;
    height: 100vh;
    padding: 2.5rem 0;
    background: #cce6e1;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    ${(props) =>
      props.isOpen
        ? "transform: translate(0, 0);"
        : "transform: translate(-150%, 0)"};
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    ul {
      width: 100%;
      text-align: center;
    }

    li {
      display: block;
      width: 100%;
      padding: 1rem 0;
      a,
      button {
        display: block;
        width: 100%;
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;
        text-align: center;

        &:hover {
          color: tomato;
        }

        &[aria-current="page"] {
          color: #fff;
          background-color: #232323;
          opacity: 0.85;
          cursor: not-allowed;
        }
      }
    }
  }
`;

const MainLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 27rem;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 100%;
  }
  .logo__nav {
    width: 50%;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      li {
        margin: 0 1rem;

        a,
        button {
          ${B1White};
          display: inline-block;
          margin: 0;
        }

        button {
          position: relative;
          top: auto;
          right: auto;
          bottom: auto;
          left: auto;
          opacity: 1;
          background-color: transparent;
          border: none;
        }
      }
    }
  }

  .logo__wrapper {
    width: 50%;

    img {
      max-width: 27rem;
    }
  }
`;

const Navigation = ({ logout, auth: { isAuthenticated, loading } }) => {
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const authLinks = (
    <ul>
      <li>
        <NavLink to="/dashboard">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/get-started">Info</NavLink>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            logout();
            history.push("/");
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink to="/get-started">Info</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
    </ul>
  );

  return (
    <NavigationStyled role="navigation" isOpen={isOpen}>
      <div className="menuToggle">
        <button type="button" onClick={handleToggleMenu} />
        <div>
          <span className="span-1" />
          <span className="span-2" />
          <span className="span-3" />
        </div>
        <div
          className="menu"
          role="button"
          tabIndex="0"
          onClick={handleToggleMenu}
          onKeyPress={handleToggleMenu}
        >
          {!loading && isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
      <MainLogo className="logo">
        <div className="logo__wrapper">
          <img src={logoHorizontal} alt="The Trailworm App" />
        </div>
        <div className="logo__nav">
          {!loading && isAuthenticated ? (
            <ul>
              <li>
                <NavLink to="/dashboard">My Profile</NavLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    logout();

                    history.push("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Signup</NavLink>
              </li>
            </ul>
          )}
        </div>
      </MainLogo>
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
