import React from "react";
import LandingPageItem from "../../components/LandingPageItems/LandingPageItems";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageItem />
    </LandingPageWrapper>
  );
};
export default LandingPage;

const LandingPageWrapper = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    background-color: #000000;
`;