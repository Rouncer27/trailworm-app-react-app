import React from "react";
import styled from "styled-components";

import treesRight from "../assets/images/trailworm-trees-right.png";
import treesLeft from "../assets/images/trailworm-trees-left.png";
import treesPine from "../assets/images/trailworm-pinetrees.png";
import path from "../assets/images/trailworm-path.png";

const BackgroundScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const TreesRightStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: -5vw;
  width: 100vw;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: -10vw;
    width: 40vw;
  }
`;

const TreesLeftStyle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: -10vw;
    width: 40vw;
  }
`;

const TreesPineCenterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 25vw;
  margin: auto;

  @media (min-width: 768px) {
    width: 5vw;
  }
`;

const TreesPineCenterLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: -35vw;
  right: 0;
  width: 20vw;
  margin: auto;

  @media (min-width: 768px) {
    left: -15vw;
    width: 5vw;
  }
`;

const TreesPineCenterRight = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: -12.5vw;
  width: 5vw;
  margin: auto;
`;

const PathStyled = styled.div`
  position: absolute;
  bottom: 12rem;
  left: -5vw;
  width: 70vw;
`;

const ForestScene = ({ isHome }) => {
  return (
    <BackgroundScene>
      <TreesRightStyle>
        <img src={treesRight} alt="illustration of pine trees" />
      </TreesRightStyle>
      <TreesLeftStyle>
        <img src={treesLeft} alt="illustration of pine trees" />
      </TreesLeftStyle>
      <TreesPineCenterStyle>
        <img src={treesPine} alt="illustration of pine trees" />
      </TreesPineCenterStyle>
      <TreesPineCenterLeft>
        <img src={treesPine} alt="illustration of pine trees" />
      </TreesPineCenterLeft>
      <TreesPineCenterRight>
        <img src={treesPine} alt="illustration of pine trees" />
      </TreesPineCenterRight>
      {isHome && (
        <PathStyled>
          <img src={path} alt="illustration of pine trees" />
        </PathStyled>
      )}
    </BackgroundScene>
  );
};

export default ForestScene;
