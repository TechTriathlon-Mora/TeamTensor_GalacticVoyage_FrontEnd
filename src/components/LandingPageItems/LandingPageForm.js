import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FormLabel,
  Box,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import ChairIcon from "@mui/icons-material/Chair";
import CustomButton from "../SearchPageItems/CustomButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

const LandingPageForm = () => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [value, setValue] = React.useState(0);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [count, setCount] = React.useState("");
  const [seat, setSeat] = React.useState("");


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFrom(event.target.value);
    setTo(event.target.value);
    setCount(event.target.value);
    setSeat(event.target.value);
  };

  return (
    <HeaderWrapper>
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
                px: 2,
                marginTop: "2vw",
              }}
            >
              <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
                <FlightTakeoffIcon />
              </FormLabel>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={from}
                  label="From"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "left",
                width: "90%",
                px: 2,
                marginTop: "2vw",
              }}
            >
              <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
                <FlightLandIcon />
              </FormLabel>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={to}
                  label="To"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "left",
                width: "90%",
                px: 2,
                marginTop: "2vw",
                sx: { textFieldStyle }
              }}
            >
              <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
                <CalendarMonthIcon />
              </FormLabel>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                      "StaticDatePicker",
                    ]}
                  >
                    <DemoItem label="Departure">
                      <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                      "StaticDatePicker",
                    ]}
                  >
                    <DemoItem label="Return">
                      <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "left",
                width: "90%",
                px: 2,
                marginTop: "2vw",
              }}
            >
              <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
                <PersonIcon />
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Passenger Count</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={count}
                    label="Passenger Count"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "left",
                width: "90%",
                px: 2,
                marginTop: "2vw",
              }}
            >
              <FormLabel sx={inputstyle} marginTop={"0.5vw"}>
                <ChairIcon />
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Seat Class</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seat}
                    label="Seat Class"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Economy</MenuItem>
                    <MenuItem value={20}>Premium Economy</MenuItem>
                    <MenuItem value={30}>Business</MenuItem>
                    <MenuItem value={30}>First Class</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 4,
              marginTop: "15px",
            }}
          >
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Round Trip"
                  control={<Radio />}
                  label="Rround Trip"
                  textColor="white"
                />
                <FormControlLabel
                  value="One Way"
                  control={<Radio />}
                  label="One Way"
                  color="white"
                />
              </RadioGroup>
            </FormControl>
          </Box>
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
                Search
              </CustomButton>
            )}
          </SearchButton>
        </Box>
      </Box>
    </HeaderWrapper>
  );
};

export default LandingPageForm;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const inputstyle = {
  color: "#FFF",
  fontSize: "14px",
  marginRight: "20px",
  marginTop: "5px",
};

const SearchButton = styled.div`
  align-items: flex-end;
  text-align: flex-end;
  justify-content: flex-end;
  padding: 1rem 0rem 0 1rem;
`;

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
const textFieldStyle = {
    "& .MuiOutlinedInput-notchedOutline": {
      // height: "2.5vw",
    },
  };
