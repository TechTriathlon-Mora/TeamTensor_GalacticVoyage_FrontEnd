import React from "react";
import ItemStepper from "../SearchPageItems/SearchPageItemStepper";
import styled from "styled-components";

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
      <PaymentText>hello</PaymentText>
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

const PaymentText = styled.h1`
  padding-top: 20vh;
  color: white;
`;
