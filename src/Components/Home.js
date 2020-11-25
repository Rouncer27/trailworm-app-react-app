// NPM Packages //
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Components //
import Signup from "./Signup";
import ForestScene from "./ForestScene";
// Helper Styles //
import { standardWrapper, H1White, H2Base, Btn1Green } from "../styles/helpers";
// Images //
import logo from "../assets/images/trailworm-app-logo.png";

gsap.registerPlugin(ScrollTrigger);

const HomeStyles = styled.div`
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
  z-index: 10;
  overflow: hidden;

  .wrapper {
    ${standardWrapper};
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    @media (min-width: 768px) {
      align-items: center;
    }
  }

  .homeContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
    z-index: 500;

    @media (min-width: 768px) {
      margin-top: auto;
      margin-top: 0;
      margin-bottom: 20vw;
    }
  }

  .logoHome {
    width: 100%;
    max-width: 20rem;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 100%;
    }

    &__container {
      @media (min-width: 768px) {
        max-width: 30rem;
        margin-right: 10rem;
        margin-left: auto;
      }
    }
  }

  .homeContent {
    width: 100%;
    margin-top: 3rem;

    @media (min-width: 768px) {
      width: calc(50%);
      margin-top: auto;
    }

    h2 {
      ${H1White};
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
      span {
        display: block;
      }
    }
  }
`;

const StartButton = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  z-index: 350;

  @media (max-width: 767px) {
    top: -18vw;
  }

  @media (max-width: 700px) {
    top: -19vw;
  }

  @media (max-width: 600px) {
    top: -24vw;
  }

  @media (max-width: 500px) {
    top: -29vw;
  }

  @media (max-width: 400px) {
    top: -34vw;
  }

  @media (min-width: 768px) {
    position: absolute;
    bottom: 21rem;
    left: 68vw;
    z-index: 340;
  }

  button {
    @media (max-width: 767px) {
      ${Btn1Green};
    }

    @media (min-width: 768px) {
      ${H2Base};
      background-color: transparent;
      border: none;
      color: var(--color-quin);
      cursor: pointer;

      &:disabled {
        cursor: initial;
        opacity: 0.25;
      }
    }

    &:focus {
      outline: none;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: ${(props) => (props.isActive ? 350 : -1)};
`;

const Home = ({ isAuthenticated }) => {
  const mainLogo = useRef(null);
  const mainContent = useRef(null);
  const [homeState, setHomeState] = useState("init");
  const [isMobile, setIsMobile] = useState(null);

  const handleGetStarted = () => {
    setHomeState("signup");
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsMobile(!window.matchMedia("(min-width: 768px)").matches);
    });
    window.addEventListener("resize", () => {
      setIsMobile(!window.matchMedia("(min-width: 768px)").matches);
    });
  }, []);

  useEffect(() => {
    if (homeState === "init") {
      gsap.to(mainLogo.current, { scale: 1, y: 0, x: 0, duration: 0.75 });
      gsap.to(mainContent.current, {
        scale: 1,
        x: 0,
        transformOrigin: "center left",
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
      });
    }

    if (homeState !== "init" && !isMobile) {
      gsap.to(mainLogo.current, { scale: 0.5, y: 0, x: 0, duration: 0.75 });
      gsap.to(mainContent.current, {
        scale: 0.5,
        transformOrigin: "center left",
        y: -225,
        x: -115,
        autoAlpha: 1,
        duration: 0.75,
      });
    }

    if (homeState !== "init" && isMobile) {
      gsap.to(mainLogo.current, {
        scale: 0.5,
        y: -90,
        x: 0,
        duration: 0.75,
      });
      gsap.to(mainContent.current, {
        scale: 0,
        transformOrigin: "center center",
        y: 0,
        x: 0,
        autoAlpha: 0,
        duration: 0.75,
      });
    }
  }, [homeState, isMobile]);

  if (isAuthenticated) {
    return <Redirect to="/get-started" />;
  }

  return (
    <HomeStyles>
      <div className="wrapper">
        <div className="homeContainer">
          <div className="logoHome">
            <div ref={mainLogo} className="logoHome__container">
              <img src={logo} alt="The Trailworm App" />
            </div>
          </div>
          <div ref={mainContent} className="homeContent">
            <h2>
              <span>Find your path. </span>
              <span>Find your home.</span>
            </h2>
          </div>

          <Signup
            isActive={homeState === "signup" || homeState === "login"}
            whatsActive={homeState}
          />
        </div>
        <Overlay isActive={homeState === "signup"} />
        <StartButton isActive={homeState === "signup"}>
          <button
            disabled={homeState === "signup"}
            onClick={handleGetStarted}
            type="button"
          >
            Start Here.
          </button>
        </StartButton>
        <ForestScene activeState={homeState === "signup"} isHome={true} />
      </div>
    </HomeStyles>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
