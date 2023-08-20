import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

const PaymentPageItemHeader = () => {
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
              color: "#ffffff",
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
              color: "#ffffff",
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
            color: "#FFB800",
            fontSize: "1.5rem",
            paddingTop: "0.4rem",
          }}
        >
          $ 255 000.00
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: "8rem",

              "@media (max-width: 775px)": {
                marginRight: "4rem",
              },
              "@media (max-width: 600px)": {
                marginRight: "2rem",
              },
              "@media (max-width: 472px)": {
                marginRight: "1rem",
              },
            }}
          >
            <FlightTakeoffIcon sx={{ 
              color: "#FFF", 
              fontSize: "2rem",
              "@media (max-width: 472px)": {
                    fontSize: "1.5rem",
                  }, }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  pl: 1,

                  "@media (max-width: 472px)": {
                    fontSize: "0.8rem",
                  },
                }}
              >
                Departure spaceflight
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  pl: 1,
                  "@media (max-width: 472px)": {
                    fontSize: "0.7rem",
                  },
                }}
              >
                18.30 - 22.30
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  pl: 1,
                  "@media (max-width: 472px)": {
                    fontSize: "0.7rem",
                  },
                }}
              >
                05/Aug/2023
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "8rem",
              "@media (max-width: 775px)": {
                marginLeft: "4rem",
              },
              "@media (max-width: 600px)": {
                marginLeft: "2rem",
              },
              "@media (max-width: 472px)": {
                marginLeft: "1rem",
              },
            }}
          >
            <FlightLandIcon sx={{ 
              color: "#FFF", 
              fontSize: "2rem",
              "@media (max-width: 472px)": {
                    fontSize: "1.5rem",
                  },
             }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  pl: 1,
                  "@media (max-width: 472px)": {
                    fontSize: "0.8rem",
                  },
                }}
              >
                Return spaceflight
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  pl: 1,
                  "@media (max-width: 472px)": {
                    fontSize: "0.7rem",
                  },
                }}
              >
                18.30 - 22.30
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  pl: 1,
                  "@media (max-width: 472px)": {
                    fontSize: "0.7rem",
                  },
                }}
              >
                05/Aug/2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </HeaderWrapper>
  );
};

export default PaymentPageItemHeader;

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
