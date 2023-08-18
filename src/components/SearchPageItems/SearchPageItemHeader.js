import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';

const SearchPageItemHeader = () => {
  return (
    <HeaderWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlightTakeoffRoundedIcon sx={{ color: "white" }} />
        <Typography
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            px: 5,
          }}
        >
          4 passengers - Economy
        </Typography>
        <ArrowDropDownCircleOutlinedIcon sx={{ color: "white" }} />
      </Box>
      
    </HeaderWrapper>
  );
};
export default SearchPageItemHeader;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;


