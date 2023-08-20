import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
} from "@mui/material";

const LandingPageHeaderItems = () => {
  return (
    <HeaderWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Display items vertically
          //   alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          pb={1}
          sx={{
            color: "white",
            textAlign: "right",
            marginRight: "10%",
          }}
        >
          <br />
          Ready To Take Off <br /> to Another Planet?
        </Typography>
        <Typography
          pb={3}
          sx={{
            fontSize: "1.1em",
            color: "white",
            textAlign: "right",
            marginRight: "10%",
            marginLeft: "40%",
          }}
        >
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          <br />
        </Typography>
      </Box>
    </HeaderWrapper>
  );
};

export default LandingPageHeaderItems;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;