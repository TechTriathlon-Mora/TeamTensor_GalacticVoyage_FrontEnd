import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SearchDepartureText = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "1.8rem",
          letterSpacing: ".3rem",
          marginTop: "1rem",
          marginBottom: "1rem",

          textAlign: "center",
          "@media (max-width: 500px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Choose your
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontSize: "1.8rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Departure Space Flight
      </Typography>
      <Typography
        sx={{
          color: "#FFB800",
          fontSize: "1.8rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          textAlign: "center",
          "@media (max-width: 500px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Earth <span style={{ color: "#FFF" }}>to</span> Mars
      </Typography>
    </Box>
  );
};
export default SearchDepartureText;
