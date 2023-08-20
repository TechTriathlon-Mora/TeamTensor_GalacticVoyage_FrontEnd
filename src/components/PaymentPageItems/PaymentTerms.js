import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PaymentCardDetailsModal from "./PaymentCardDetailsModal";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PaymentTerms = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.8rem",
          letterSpacing: ".3rem",
          marginBottom: "1rem",
          padding: "0 0rem 0 5rem",
          textAlign: "left",
          alignItems: "left",
          "@media (max-width: 472px)": {
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "0 0rem 0 0rem",
          },
        }}
      >
        Terms and conditions
      </Typography>
      <Box
        sx={{
          margin: "0 5rem 0 5rem",
          border: "1px solid #ffffff",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "1rem",
          "@media (max-width: 650px)": {
            margin: "0 1.5rem 0 1.5rem",
          },
          "@media (max-width: 450px)": {
            padding: "0 1rem 0 1rem",
            margin: "0 1rem 0 1rem",
          },
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

            "@media (max-width: 500px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 450px)": {
              fontSize: "0.8rem",
              padding: "0 0rem 0 1rem",
            },
            "@media (max-width: 350px)": {
              fontSize: "0.7rem",
              padding: "0 0rem 0 0.8rem",
            },
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          px: 1,
          marginTop: "2vw",
          padding: "0 0rem 0 5rem",
          "@media (max-width: 650px)": {
            padding: "0 1.5rem 0 1.5rem",
          },
          "@media (max-width: 450px)": {
            padding: "0 1rem 0 1rem",
          },
        }}
      >
        <Checkbox
          {...label}
          defaultChecked
          color="default"
          sx={{
            color: "#FFF",
          }}
        />
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "1rem",
          }}
        >
          I have read and agree to Terms and Conditions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          "@media (max-width: 600px)": {
            fontSize: "0.9rem",
          },
          "@media (max-width: 500px)": {
            fontSize: "0.8rem",
          },
          "@media (max-width: 400px)": {
            fontSize: "0.7rem",
          },
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "2rem",
            marginLeft: "2rem",
            textAlign: "left",
            alignItems: "left",
            "@media (max-width: 600px)": {
              fontSize: "1.8rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1.5rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "1rem",
            },
          }}
        >
          Total Price:
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "2.5rem",
            marginLeft: "2rem",
            textAlign: "left",
            alignItems: "left",
            "@media (max-width: 600px)": {
              fontSize: "2rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1.8rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "1rem",
              marginLeft: "0.8rem",
            },
          }}
        >
          $ 255 000.00
        </Typography>
        <ArrowDropDownOutlinedIcon
          sx={{ color: "#FFF", fontSize: "2rem" }}
          cursor="pointer"
          onClick={handleOpen}
        />
      </Box>
      <PaymentCardDetailsModal open={modalOpen} onClose={handleClose} />
    </Box>
  );
};
export default PaymentTerms;
