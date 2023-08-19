import React, { useState } from "react";
import ItemStepper from "./SearchPageItemStepper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchPageItemHeader from "./SearchPageItemHeader";
import SearchDepartureText from "./SearchDepartureText";
import SearchFilterBar from "./SearchFilterBar";
import SearchDepartureCards from "./SearchDepartureCard";
import SearchReturnCards from "./SearchReturnCard";
import SearchReturnText from "./SearchReturnText";
import CustomButton from "./CustomButton";

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
      </SearchStepperWrapper>
      <br />
      <SearchHeaderWrapper>
        <SearchPageItemHeader />
      </SearchHeaderWrapper>

      <SearchDepartureText />
      <SearchFilterBar />
      <SearchDepartureCardsWrapper>
        <SearchDepartureCards />
      </SearchDepartureCardsWrapper>
      <SearchReturnText />
      <SearchFilterBar />
      <SearchReturnCardsWrapper>
        <SearchReturnCards />
      </SearchReturnCardsWrapper>
      {/* <SearchText>hello</SearchText> */}
      <SearchButton>
        {activeStep === 0 && (
          <CustomButton
          textAlign="flex-end"
          justifyContent="flex-end"
          alignItems="flex-end"
            backgroundColor="#FFB800"
            textColor="#000000"
           
            marginTop="2rem"
            onClick={() => {
              setActiveStep(1);
              navigate("/bookingpage");
            }}
          >
            Continue
          </CustomButton>
        )}
      </SearchButton><br/><br/><br/>
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

const SearchDepartureCardsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SearchReturnCardsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SearchButton = styled.div`
  align-items: flex-end;
  text-align: flex-end;
  justify-content: flex-end;
  padding: 1rem 0rem 0 1rem;

  
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
