import React from "react";
import BookingPageItem from "../../components/BookingPageItems/BookingPageItems";
import styled from "styled-components";

const BookingPage= () => {
    return (
        <BookingPageWrapper>
            <BookingPageItem />
        </BookingPageWrapper>
    );
    };
export default BookingPage;

const BookingPageWrapper = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    background-color: #000000;
`;