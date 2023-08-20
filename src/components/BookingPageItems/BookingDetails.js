import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BookingPersonDetailsModal from "./BookingPersonDetailsModal";

const BookingDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({ number: null, type: null });

  const handleOpen = (index, passengerType) => {
    setSelectedPerson({ number: index + 1, type: passengerType });
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  const numberOfBoxes = 4;
  const passengerTypes = ["Adult", "Adult", "Child", "Child"];
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
          "@media (max-width: 472px)": {
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "0 0rem 0 0rem",
          },
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        {Array.from({ length: numberOfBoxes }).map((_, index) => (
          <div>
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "50vw",
              padding: "1rem",
              border: "1px solid #ffffff",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(5rem)",
              marginBottom: "1rem",
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
                color: "#FFB800",
                fontSize: "1.2rem",
                marginLeft: "2rem",
              }}
            >
              Person {index + 1} - {passengerTypes[index]}
            </Typography>

            <KeyboardArrowDownIcon
              sx={{ color: "#FFB800", 
              fontSize: "3rem" ,
              "@media (max-width: 500px)": {
            fontSize: "2rem",
          },
              }}
              cursor="pointer"
              onClick={() => handleOpen(index, passengerTypes[index])}
            />
            
          </Box>
          <BookingPersonDetailsModal
              open={modalOpen} onClose={handleClose}
              selectedPerson={selectedPerson}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};
export default BookingDetails;
