import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SearchReturnText = () => {
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
        }}
      >
        Return Space Flight
      </Typography>
      <Typography
        sx={{
          color: "#FFB800",
          fontSize: "1.8rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Mars <span style={{ color: "#FFF" }}>to</span> Earth
      </Typography>
    </Box>
  );
};
export default SearchReturnText;
