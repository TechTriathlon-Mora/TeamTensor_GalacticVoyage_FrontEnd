import React from "react";
import ItemStepper from "../SearchPageItems/SearchPageItemStepper";
import styled from "styled-components";
import PaymentPageItemHeader from "./PaymentHeader";
import PaymentInstruction from "./PaymentInstruction";
import { Payment } from "@mui/icons-material";

const PaymentPageItem = () => {
  return (
    <PaymentWrapper>
      <br />
      <br />
      <br />
      <br />
      <PaymentStepperWrapper>
        <ItemStepper initialStep={2} />
      </PaymentStepperWrapper><br/>
      <PaymentHeaderWrapper>
        <PaymentPageItemHeader />
      </PaymentHeaderWrapper>
      <PaymentInstructionWrapper>
        <PaymentInstruction />
      </PaymentInstructionWrapper>
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
const PaymentText = styled.h1`
  padding-top: 20vh;
  color: white;
`;
