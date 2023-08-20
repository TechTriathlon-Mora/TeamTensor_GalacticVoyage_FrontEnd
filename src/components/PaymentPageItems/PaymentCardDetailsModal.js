import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PaymentCardDetailsModal = ({ open, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const [expirationError, setExpirationError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    if (!/^\d{0,16}$/.test(numericValue)) {
      setCardNumberError("You can enter only 16 numbers.");
    } else {
      // Limit to 16 characters
      const truncatedValue = numericValue.slice(0, 16);
      // Split into groups of 4 characters
      const formattedValue = truncatedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
      setCardNumber(formattedValue);
      setCardNumberError("");
    }
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value;

    // Ensure the value has the format MM/YY
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
      setExpirationError("Invalid format. Use MM/YY.");
    } else {
      // Split month and year
      const [month, year] = value.split("/");
      // Get current date
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      // Validate month and year
      if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
        setExpirationError("Invalid month.");
      } else if (parseInt(year, 10) < currentYear) {
        setExpirationError("Card has expired.");
      } else {
        setExpirationError("");
      }
    }
    setExpirationDate(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value;
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    if (!/^\d{0,3}$/.test(numericValue)) {
      setCvvError("You can enter only 3 numbers.");
    } else {
      setCvv(numericValue);
      setCvvError("");
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Add your card details</b>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "90%",

              marginTop: "1vw",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                  Card Number*
                </FormLabel>
                <TextField
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  label=""
                  variant="outlined"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  fullWidth
                />
                {cardNumberError && (
                  <Typography color="error" variant="caption">
                    {cardNumberError}
                  </Typography>
                )}
              </div>
              <div>
                <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                  Expiration Date*
                </FormLabel>
                <TextField
                  id="expirationDate"
                  name="expirationDate"
                  type="text"
                  label=""
                  variant="outlined"
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                  fullWidth
                />
                {expirationError && (
                  <Typography color="error" variant="caption">
                    {expirationError}
                  </Typography>
                )}
              </div>
              <div>
                <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                  CVV*
                </FormLabel>
                <TextField
                  id="cvv"
                  name="cvv"
                  type="password"
                  label=""
                  variant="outlined"
                  value={cvv}
                  onChange={handleCvvChange}
                  fullWidth
                />
                {cvvError && (
                  <Typography color="error" variant="caption">
                    {cvvError}
                  </Typography>
                )}
              </div>
              <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                Card Holder’s Name*
              </FormLabel>
              <TextField
                id="name"
                name="name"
                type="text"
                label=""
                variant="outlined"
                value={name}
                fullWidth
                onChange={handleNameChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "1vw",
                  backgroundColor: "#FFB800",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#FFB800",
                    opacity: 0.8,
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default PaymentCardDetailsModal;

const inputstyle = {
  color: "#000000",
  fontSize: "0.8rem",
};
