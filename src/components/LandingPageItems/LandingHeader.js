import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { FormLabel, Box, TextField, Typography, Tabs, Tab } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LandingPageHeaderItems = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          padding: "1rem",
          width: "30vw",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(5rem)",
          borderRadius: "2rem",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "left",
            width: "90%",
            px: 4,
            marginTop: "2vw",
          }}
        >
          <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
            From
          </FormLabel>

          <TextField
            width="20%"
            id="email"
            name="email"
            type="email"
            label=""
            variant="outlined"
            sx={smallTextStyle}
            // value={first_name}
            // error={!!formErrors.firstNameError}
            // helperText={formErrors.firstNameError}
            // onChange={(e) => {
            //   setFirst_name(e.target.value);
            // }}
            // onBlur={handleFirstNameBlur}
            // error={!firstNameValid}
            // helperText={firstNameErrorMessage}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "left",
            width: "90%",
            px: 4,
            marginTop: "2vw",
          }}
        >
          <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
            To
          </FormLabel>

          <TextField
            id="email"
            name="email"
            type="email"
            label=""
            variant="outlined"
            sx={smallTextStyle}
            // value={first_name}
            // error={!!formErrors.firstNameError}
            // helperText={formErrors.firstNameError}
            // onChange={(e) => {
            //   setFirst_name(e.target.value);
            // }}
            // onBlur={handleFirstNameBlur}
            // error={!firstNameValid}
            // helperText={firstNameErrorMessage}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "left",
            width: "90%",
            px: 4,
            marginTop: "2vw",
          }}
        >
          <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
            Departure & Return
          </FormLabel>

          <TextField
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            label=""
            variant="outlined"
            sx={smallTextStyle}
            // value={first_name}
            // error={!!formErrors.firstNameError}
            // helperText={formErrors.firstNameError}
            // onChange={(e) => {
            //   setFirst_name(e.target.value);
            // }}
            // onBlur={handleFirstNameBlur}
            // error={!firstNameValid}
            // helperText={firstNameErrorMessage}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "left",
            width: "90%",
            px: 4,
            marginTop: "2vw",
          }}
        >
          <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
            Passenger Count
          </FormLabel>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                
            }}
        >
        <TextField
          id="email"
          name="email"
          type="email"
          label=""
          variant="outlined"
          sx={{ ...smallTextStyle, 
          width: "30%"
          
            
          }}
          // value={first_name}
          // error={!!formErrors.firstNameError}
          // helperText={formErrors.firstNameError}
          // onChange={(e) => {
          //   setFirst_name(e.target.value);
          // }}
          // onBlur={handleFirstNameBlur}
          // error={!firstNameValid}
          // helperText={firstNameErrorMessage}
        />
        </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                label=""
                variant="outlined"
                sx={{ ...smallTextStyle, width: "65%" }}
                // value={first_name}
                // error={!!formErrors.firstNameError}
                // helperText={formErrors.firstNameError}
                // onChange={(e) => {
                //   setFirst_name(e.target.value);
                // }}
                // onBlur={handleFirstNameBlur}
                // error={!firstNameValid}
                // helperText={firstNameErrorMessage}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "left",
            width: "90%",
            px: 4,
            marginTop: "2vw",
          }}
        >
          <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
            Seat Class
          </FormLabel>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                
            }}
        >
        <TextField
          id="email"
          name="email"
          type="email"
          label=""
          variant="outlined"
          sx={{ ...smallTextStyle, 
          width: "30%"
          
            
          }}
          // value={first_name}
          // error={!!formErrors.firstNameError}
          // helperText={formErrors.firstNameError}
          // onChange={(e) => {
          //   setFirst_name(e.target.value);
          // }}
          // onBlur={handleFirstNameBlur}
          // error={!firstNameValid}
          // helperText={firstNameErrorMessage}
        />
        </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                label=""
                variant="outlined"
                sx={{ ...smallTextStyle, width: "65%" }}
                // value={first_name}
                // error={!!formErrors.firstNameError}
                // helperText={formErrors.firstNameError}
                // onChange={(e) => {
                //   setFirst_name(e.target.value);
                // }}
                // onBlur={handleFirstNameBlur}
                // error={!firstNameValid}
                // helperText={firstNameErrorMessage}
              />
            </Box>
          </Box>
        </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
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

const inputstyle = {
  color: "#FFF",
  fontSize: "14px",
};

const smallTextStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(255, 255, 255, 0.5)",

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
