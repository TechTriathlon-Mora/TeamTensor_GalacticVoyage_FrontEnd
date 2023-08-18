import React, { useState } from "react";
import ItemStepper from "./SearchPageItemStepper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchPageItemHeader from "./SearchPageItemHeader";
import SearchDepartureText from "./SearchDepartureText";

const SearchPageItem = () => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SearchWrapper>
      <br />
      <br />
      <br />
      <br />
      <SearchStepperWrapper>
        <ItemStepper initialStep={0} />
      </SearchStepperWrapper><br/>
      <SearchHeaderWrapper>
          <SearchPageItemHeader />
      </SearchHeaderWrapper>
      
      <SearchDepartureText />
      {/* <SearchText>hello</SearchText> */}
      {activeStep === 0 && (
        <Button
          onClick={() => {
            setActiveStep(1);
            navigate("/bookingpage");
          }}
        >
          Continue
        </Button>
      )}
    </SearchWrapper>
  );
};
export default SearchPageItem;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const SearchStepperWrapper = styled.div`
  width: 100%;
  /* padding-top: 10vh; */
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem);
`;

const SearchHeaderWrapper = styled.div`
  width: 100%;
   padding: 4vh 0 4vh 0; 
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem);

`;

const SearchText = styled.h1`
  padding-top: 20vh;
  color: white;
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #d9d9d9;
    color: #000000;
  }
`;
