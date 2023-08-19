import React from "react";
import Box from "@mui/material/Box";
import { FormLabel, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BookingContactDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "1rem",
        width: "50vw",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(5rem)",
        borderRadius: "2rem",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "1.3rem",
          px: 4,
          alignItems: "flex-start",
        }}
      >
        Contact Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Email*
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Re Enter Email*
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Home Phone Number *
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Mobile Phone Number*
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
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          px: 4,
          // marginTop: "2vw",
        }}
      >
        <Checkbox {...label} defaultChecked color="default" />
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "0.8rem",
          }}
        >
          I want to receive a notification SMS.
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "1.3rem",
          px: 4,
          marginTop: "2vw",
          alignItems: "flex-start",
        }}
      >
        Emergency Contact Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Name of the person to be contacted in an emergency*
        </FormLabel>

        <TextField
          id="name"
          name="name"
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "90%",
          px: 4,
          marginTop: "2vw",
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Home Phone Number *
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
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          px: 4,
          // marginTop: "2vw",
        }}
      >
        <Checkbox {...label} defaultChecked color="default" />
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "0.8rem",
          }}
        >
          Please remember my traveler information for future visits.
        </Typography>
      </Box>
    </Box>
  );
};
export default BookingContactDetails;

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
