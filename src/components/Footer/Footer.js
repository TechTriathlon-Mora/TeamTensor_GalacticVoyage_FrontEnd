import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CustomButton from "../SearchPageItems/CustomButton";
import { FormLabel, Box, TextField } from "@mui/material";

const inputstyle = {
    color: "#FFF",
    fontSize: "14px",
    marginRight: "10px",
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set minimum height of the container to full viewport height */
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const StyledFooter = styled(AppBar)`
  background-color: black !important;
  box-shadow: none;
  border-top: 1px solid #e0e0e0;
  height: 14%; /* Fixed height of the footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto; /* Push the footer to the bottom */
  align-items: center;
`;

const LogoImg = styled.img`
  height: 95%;
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  gap: 0px;
`;
const StyledTypographysub = styled(Typography)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: grey;
  justify-content: center;
  padding: 28px;
  gap: 0px;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 20px; /* Adjust the gap as needed */
  align-items: center;
  margin-top: 20px; /* Add some top margin */
`;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: "#A9A9A9";
  font-family: "Roboto";
  margin: 58px 6px;
  padding: 15px 10px;
  width: 50%;
  height: 10px;
  border: ${(props) => (props?.border ? "1px solid #D2D2D2" : "")};
  border-radius: 9px;
`;

const SearchButton = styled.div`
  align-items: flex-end;
  text-align: flex-end;
  justify-content: flex-end;
  padding: 1rem 0rem 0 1rem;
`;

const Footer = () => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  return (
    <Container>
      {/* The main content of your page goes here */}

      <StyledFooter position="bottom">
        <StyledTypography variant="h6" component="div"></StyledTypography>
        <Typography variant="h6" component="div">
          About us
        </Typography>
        <StyledTypographysub>
          <Typography variant="h12" component="div">
            About GalacticVoyage<br/> Right to information Act
          </Typography>
        </StyledTypographysub>

        <Typography variant="h6" component="div">
          Help
        </Typography>
        <StyledTypographysub>
          <Typography variant="h12" component="div">
            24 Hours Contact Center<br/> Online Chat Support<br/> FAQs
          </Typography>
        </StyledTypographysub>

        <Typography variant="h6" component="div">
          Terms and Conditions
        </Typography>
        <StyledTypographysub>
          <Typography variant="h12" component="div">
            Online Booking Terms of Use<br/> Conditions of Carriage<br/> Notices for Travel Agents
          </Typography>
        </StyledTypographysub>
        <Typography variant="h6" component="div">
          Subscribe to Our Special Offers
        </Typography>
        <RowContainer>
          <TextInputWrapper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "90%",
                px: 0,
                marginTop: "1.5vw",
              }}
            >
              <FormLabel sx={inputstyle} marginTop={"2vw"}>
                Email
              </FormLabel>

              <TextField
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                label=""
                variant="outlined"
                sx={smallTextStyle}
              />
            </Box>
          </TextInputWrapper>
          <SearchButton>
            {activeStep === 1 && (
              <CustomButton
                backgroundColor="#FFB800"
                textColor="#000000"
                onClick={() => {
                  setActiveStep(1);
                  window.scrollTo(0, 0);
                  navigate("/paymentpage");
                }}
              >
                Subscribe
              </CustomButton>
            )}
          </SearchButton>
        </RowContainer>
        <SocialIconsContainer>
          <FacebookIcon style={{ fontSize: "62px" }} />
          <YouTubeIcon style={{ fontSize: "72px" }} />
          <LinkedInIcon style={{ fontSize: "62px" }} />
          <InstagramIcon style={{ fontSize: "62px" }} />
        </SocialIconsContainer>
      </StyledFooter>
    </Container>
  );
};

export default Footer;

const smallTextStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(255, 255, 255, 0.5)",

    width: "20vw",
    height: "40px",
    margin: "none",
    padding: "none",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    background: "rgba(255, 255, 255, 0.25)",

    "&:hover fieldset": {
      borderColor: "grey",
    },
  },

  "& .MuiOutlinedInput-input": {
    position: "relative",
    zIndex: 1,
  },

  "& .MuiInputBase-root ": {
    width: "35rem",
    height: "2.8rem",
  },
  "& .MuiFormControl-root": {
    padding: "0px 10px",
    height: "2.8rem",
    color: "white",
  },
  "& .MuiOutlinedInput-root:hover ": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      transition: "background-color 5000s ease-in-out 0s",
      background: "rgba(255, 255, 255, 0.25) ",
      color: "white !important",
      padding: "0px 14px  !important",
      appearance: "none  !important",
    },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
};
