import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";

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
        <FlightTakeoffRoundedIcon
          sx={{
            color: "white",
            fontSize: "2rem",
            "@media (max-width: 800px)": {
              fontSize: "1.8rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1.5rem",
            },
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            px: 5,
            "@media (max-width: 800px)": {
              fontSize: "1.2rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1rem",
              px: 3,
            },
          }}
        >
          4 passengers - Economy
        </Typography>
        <ArrowDropDownCircleOutlinedIcon
          sx={{
            color: "white",
            "@media (max-width: 800px)": {
              fontSize: "1.4rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1.2rem",
            },
          }}
        />
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
