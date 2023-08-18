import React from "react";
import PaymentPageItem from "../../components/PaymentPageItems/PaymentPageItem";
import styled from "styled-components";

const PaymentPage= () => {
    return (
        <PaymentPageWrapper>
            <PaymentPageItem />
        </PaymentPageWrapper>
    );
    };
export default PaymentPage;

const PaymentPageWrapper = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    background-color: #000000;
`;