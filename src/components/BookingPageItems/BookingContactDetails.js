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
        "@media (max-width: 700px)": {
          width: "60vw",
        },
        "@media (max-width: 500px)": {
          width: "70vw",
        },
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "1.3rem",
          px: 4,
          alignItems: "flex-start",
          "@media (max-width: 400px)": {
            fontSize: "1.2rem",
            textAlign: "center",
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
        }}
      >
        <FormLabel sx={inputstyle} marginBottom={"0.5vw"}>
          Mobile Phone Number*
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          px: 4,

          "@media (max-width: 500px)": {
            px: 1,
          },
        }}
      >
        <Checkbox {...label} defaultChecked color="default" />
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "0.8rem",
            "@media (max-width: 600px)": {
              fontSize: "0.75rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "0.7rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.6rem",
            },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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
          "@media (max-width: 500px)": {
            px: 1,
          },
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

          "@media (max-width: 500px)": {
            px: 1,
          },
        }}
      >
        <Checkbox {...label} defaultChecked color="default" />
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "0.8rem",
            "@media (max-width: 600px)": {
              fontSize: "0.75rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "0.7rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.6rem",
            },
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

    height: "7vh",
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
    width: "45vw",
    height: "2.8rem",

    "@media (max-width: 400px)": {
      width: "55vw",
    },
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
