import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoHorizontal from "../assets/images/trailworm-horizontal.png";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: var(--color-lgt-black);

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

    a {
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

      li {
        padding: 1rem 0;
      }
    }
  }
`;

const MainLogo = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled role="navigation" isOpen={isOpen}>
      <div className="menuToggle">
        <button type="button" onClick={handleToggleMenu} />
        <div>
          <span className="span-1" />
          <span className="span-2" />
          <span className="span-3" />
        </div>
        <ul className="menu" onClick={handleToggleMenu}>
          <NavLink to="/" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/info">
            <li>Info</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <MainLogo className="logo">
        <img src={logoHorizontal} alt="The Trailworm App" />
      </MainLogo>
    </NavigationStyled>
  );
};

export default Navigation;
