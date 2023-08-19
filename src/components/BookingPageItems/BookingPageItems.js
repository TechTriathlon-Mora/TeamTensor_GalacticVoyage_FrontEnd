import React, { useState } from "react";
import ItemStepper from "../SearchPageItems/SearchPageItemStepper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookingItemHeader from "./BookingHeader";
import BookingDetails from "./BookingDetails";

const BookingPageItem = () => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  
  return (
    <BookingWrapper><br/><br/><br/><br/>
      <BookingStepperWrapper>
      <ItemStepper initialStep={1} />
      </BookingStepperWrapper><br/>
      <BooingHeaderWrapper>
        <BookingItemHeader />
      </BooingHeaderWrapper><br/>
      <BookingDetailsWrapper>
        <BookingDetails />
      </BookingDetailsWrapper>

      <BookingText>hellov</BookingText>
      {activeStep === 1 && (
        <Button
          onClick={() => {
            setActiveStep(1);
            navigate("/paymentpage");
          }}
        >
          Continue
        </Button>
      )}
    </BookingWrapper>
  );
};
export default BookingPageItem;

const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const BookingStepperWrapper = styled.div`
    width: 100%;
    /* padding-top: 10vh; */
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5rem);
`;

const BooingHeaderWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem);
`;

const BookingDetailsWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
  /* background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem); */
`;

const BookingText = styled.h1`
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
  }`;
