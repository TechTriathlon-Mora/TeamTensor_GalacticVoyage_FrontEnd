import React from "react";
import SearchPageItem from "../../components/SearchPageItems/SearchPageItem";
import styled from "styled-components";

const SearchPage= () => {
    return (
        <SearchPageWrapper>
            <SearchPageItem />
        </SearchPageWrapper>
    );
    }
export default SearchPage;

const SearchPageWrapper = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    background-color: #000000;
`;