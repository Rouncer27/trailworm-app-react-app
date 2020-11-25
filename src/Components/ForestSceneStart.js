import React from "react";
import styled, { css } from "styled-components";

import tallTreeOne from "../assets/images/trailworm-start-tall-one.png";
import tallTreeTwo from "../assets/images/trailworm-start-tall-two.png";
import tallTreeThree from "../assets/images/trailworm-start-tall-three.png";
import tallTreeFour from "../assets/images/trailworm-start-tall-four.png";
import evergreenOne from "../assets/images/trailworm-start-evergreen-one.png";
import evergreenTwo from "../assets/images/trailworm-start-evergreen-two.png";
import evergreenThree from "../assets/images/trailworm-start-evergreen-three.png";
import evergreenFour from "../assets/images/trailworm-start-evergreen-four.png";

const BackgroundScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const TreeBase = css`
  position: absolute;
  bottom: 0;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const TallOne = styled.div`
  ${TreeBase};
  left: 5rem;
  width: 20rem;

  @media (min-width: 768px) {
    left: 5vw;
    width: 20rem;
  }
`;

const TallTwo = styled.div`
  ${TreeBase};

  @media (min-width: 768px) {
    left: 18vw;
    width: 22rem;
  }
`;

const TallThree = styled.div`
  ${TreeBase};
  right: 10vw;
  width: 10vw;

  @media (min-width: 768px) {
    right: 10vw;
    width: 10vw;
  }
`;

const TallFour = styled.div`
  ${TreeBase};
  right: 10vw;
  width: 10vw;

  @media (min-width: 768px) {
    right: 20vw;
    width: 9vw;
  }
`;

const EvergreenOne = styled.div`
  ${TreeBase};
  left: 15vw;
  width: 10vw;
`;

const EvergreenTwo = styled.div`
  ${TreeBase};
  left: 30vw;
  width: 5vw;
`;

const EvergreenThree = styled.div`
  ${TreeBase};
  right: 15vw;
  width: 4.5vw;
`;

const EvergreenFour = styled.div`
  ${TreeBase};
  right: 20vw;
  width: 5.5vw;
`;

const ForestSceneStart = () => {
  return (
    <BackgroundScene>
      <TallOne>
        <img src={tallTreeOne} alt="" />
      </TallOne>
      <TallTwo>
        <img src={tallTreeTwo} alt="" />
      </TallTwo>
      <TallThree>
        <img src={tallTreeThree} alt="" />
      </TallThree>
      <TallFour>
        <img src={tallTreeFour} alt="" />
      </TallFour>

      <EvergreenOne>
        <img src={evergreenOne} alt="" />
      </EvergreenOne>
      <EvergreenTwo>
        <img src={evergreenTwo} alt="" />
      </EvergreenTwo>
      <EvergreenThree>
        <img src={evergreenThree} alt="" />
      </EvergreenThree>
      <EvergreenFour>
        <img src={evergreenFour} alt="" />
      </EvergreenFour>
    </BackgroundScene>
  );
};

export default ForestSceneStart;
