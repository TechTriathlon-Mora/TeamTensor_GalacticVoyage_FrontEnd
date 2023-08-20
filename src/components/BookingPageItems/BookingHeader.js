import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const BookingPageItemHeader = () => {
  return (
    <HeaderWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FFB800",
              fontSize: "1.3rem",
              fontWeight: "bold",
              pr: 1,
            }}
          >
            Earth
          </Typography>
          <RotatedSwapVertIcon />
          <Typography
            sx={{
              color: "#FFB800",
              fontSize: "1.3rem",
              fontWeight: "bold",
              pl: 1,
            }}
          >
            Mars
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: "1rem",
            paddingTop: "0.4rem",
          }}
        >
          August 20, 2023
        </Typography>
      </Box>
    </HeaderWrapper>
  );
};

export default BookingPageItemHeader;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const RotatedSwapVertIcon = styled(SwapVertIcon)`
  transform: rotate(90deg);
  color: white;
`;
