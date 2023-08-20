import React from "react";
import styled from "styled-components";
import LandingHeaderItems from "./LandingHeader";
import LandingPageForm from "./LandingPageForm";
import BackgroundImage from "../../assets/background.jpg";
import PlanetImage from "../../assets/backgroundImage.png"

const LandingPageItem = () => {
  return (
    <LandingWrapper>
      <br />
      <br />
      <br />
      <br />
      <LandingHeaderWrapper>
        <LandingHeaderItems/>
      </LandingHeaderWrapper>
      <br />
      <LandingPageFormWrapper>
        <LandingPageForm/>
      </LandingPageFormWrapper>
      <br />
      </LandingWrapper>
  );
};
export default LandingPageItem;

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const LandingPageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const LandingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;