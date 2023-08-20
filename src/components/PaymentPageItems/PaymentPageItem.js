import React from "react";
import ItemStepper from "../SearchPageItems/SearchPageItemStepper";
import styled from "styled-components";
import PaymentPageItemHeader from "./PaymentHeader";
import PaymentInstruction from "./PaymentInstruction";
import PaymentCurrency from "./PaymentCurrency";
import PaymentDelivery from "./PaymentDelivery";
import PaymentMethod from "./PaymentMethod";
import PaymentTerms from "./PaymentTerms";
import CustomButton from "../SearchPageItems/CustomButton";

const PaymentPageItem = () => {
  return (
    <PaymentWrapper>
      <br />
      <br />
      <br />
      <br />
      <PaymentStepperWrapper>
        <ItemStepper initialStep={2} />
      </PaymentStepperWrapper>
      <br />
      <PaymentHeaderWrapper>
        <PaymentPageItemHeader />
      </PaymentHeaderWrapper>
      <PaymentInstructionWrapper>
        <PaymentInstruction />
      </PaymentInstructionWrapper>
      <PaymentCurrencyWrapper>
        <PaymentCurrency />
      </PaymentCurrencyWrapper>
      <PaymentDeliveryWrapper>
        <PaymentDelivery />
      </PaymentDeliveryWrapper>
      <PaymentMethodWrapper>
        <PaymentMethod />
      </PaymentMethodWrapper>
      <PaymentTermsWrapper>
        <PaymentTerms />
      </PaymentTermsWrapper>
      <SearchButton>
        <CustomButton
          backgroundColor="#FFB800"
          textColor="#000000"
          onClick={() => {
            window.location.href = "https://www.paypal.com/";
          }}
        >
          Pay
        </CustomButton>
      </SearchButton>
      <br />
      <br />
    </PaymentWrapper>
  );
};
export default PaymentPageItem;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const PaymentStepperWrapper = styled.div`
  width: 100%;
  /* padding-top: 10vh; */
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem);
`;

const PaymentHeaderWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5rem);
`;

const PaymentInstructionWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const PaymentCurrencyWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const PaymentDeliveryWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const PaymentMethodWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const PaymentTermsWrapper = styled.div`
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
`;

const SearchButton = styled.div`
  align-items: flex-end;
  text-align: flex-end;
  justify-content: flex-end;
  padding: 1rem 0rem 0 1rem;

   
`;
