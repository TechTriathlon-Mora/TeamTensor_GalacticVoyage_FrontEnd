import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PaymentCurrency = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.8rem",
          letterSpacing: ".3rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "0 0rem 0 5rem",
          textAlign: "left",
          alignItems: "left",
        }}
      >
        Instructions
      </Typography>
      <Box
        sx={{
          margin: "0 5rem 0 5rem",
          border: "1px solid #ffffff",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "1rem",
        }}
      >
        <Typography
          component="ol"
          sx={{
            color: "white",
            fontSize: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "left",
            alignItems: "left",
            padding: "0 0rem 0 5rem",
            listStyleType: "decimal",
          }}
        >
          <li>Please fill in the form below to book your flight.</li>
          <li>
            At Inter-Galaxy Travels, we've shattered the boundaries of
            conventional travel. Step into a world where space exploration is no
            longer reserved for the elite few. Whether you're an intrepid
            explorer seeking alien landscapes or a cosmic vacationer yearning
            for celestial relaxation, our app.
          </li>
          <li>
            You're an intrepid explorer seeking alien landscapes or a cosmic
            vacationer yearning for celestial relaxation, our app.
          </li>
        </Typography>
      </Box>
      </Box>
  );
};
export default PaymentCurrency;
