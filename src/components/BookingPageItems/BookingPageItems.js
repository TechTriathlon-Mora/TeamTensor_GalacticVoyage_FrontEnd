import React, { useState } from "react";
import ItemStepper from "../SearchPageItems/SearchPageItemStepper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookingItemHeader from "./BookingHeader";
import BookingDetails from "./BookingDetails";
import BookingContactDetails from "./BookingContactDetails";
import BookingAdditionalServices from "./BookingAdditionalServices";
import CustomButton from "../SearchPageItems/CustomButton";

const BookingPageItem = () => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  return (
    <BookingWrapper>
      <br />
      <br />
      <br />
      <br />
      <BookingStepperWrapper>
        <ItemStepper initialStep={1} />
      </BookingStepperWrapper>
      <br />
      <BooingHeaderWrapper>
        <BookingItemHeader />
      </BooingHeaderWrapper>
      <br />
      <BookingDetailsWrapper>
        <BookingDetails />
      </BookingDetailsWrapper>
      <BookingContactDetailsWrapper>
        <BookingContactDetails />
      </BookingContactDetailsWrapper>
      <BookingAditionalServicesWrapper>
        <BookingAdditionalServices />
      </BookingAditionalServicesWrapper>
      <SearchButton>
      {activeStep === 1 && (
        <CustomButton
          onClick={() => {
            setActiveStep(1);
            navigate("/paymentpage");
          }}
        >
          Continue
        </CustomButton>
      )}
      </SearchButton><br/><br/>
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
`;

const BookingContactDetailsWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const BookingAditionalServicesWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
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
