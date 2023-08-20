import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LuggageSharpIcon from "@mui/icons-material/LuggageSharp";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";

const BookingAdditionalServices = () => {
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
            fontSize: "1.3rem",
            textAlign: "center",
            padding: "0 0rem 0 0.2rem",
          },
        }}
      >
        Additional Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60vw",
            padding: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5rem)",
            margin: "0 5rem 2rem 5rem",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.2rem",
              marginLeft: "2rem",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 500px)": {
                fontSize: "1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 400px)": {
                fontSize: "0.8rem",
                marginLeft: "0rem",
              },
            }}
          >
            Booking Details
          </Typography>
          <ArrowDropDownOutlinedIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60vw",
            padding: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5rem)",
            margin: "0 5rem 2rem 5rem",
          }}
        >
          <LuggageSharpIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.2rem",
              marginLeft: "2rem",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 500px)": {
                fontSize: "1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 400px)": {
                fontSize: "0.8rem",
                marginLeft: "0rem",
              },
            }}
          >
            Luggage details
          </Typography>
          <ArrowDropDownOutlinedIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60vw",
            padding: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5rem)",
            margin: "0 5rem 2rem 5rem",
          }}
        >
          <RequestPageOutlinedIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.2rem",
              marginLeft: "2rem",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 500px)": {
                fontSize: "1rem",
                marginLeft: "0rem",
              },
              "@media (max-width: 400px)": {
                fontSize: "0.8rem",
                marginLeft: "0rem",
              },
            }}
          >
            Spaceflight special requests
          </Typography>
          <ArrowDropDownOutlinedIcon
            sx={{
              color: "#FFF",
              fontSize: "2rem",
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
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
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
          $ 0.00
        </Typography>
        <ArrowDropDownOutlinedIcon
          sx={{
            color: "#FFF",
            fontSize: "2rem",
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
        />
      </Box>
    </Box>
  );
};
export default BookingAdditionalServices;
