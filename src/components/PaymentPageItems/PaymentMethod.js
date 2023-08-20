import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import Checkbox from "@mui/material/Checkbox";
import PaymentMethodOption from "./PaymentMethodOption";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PaymentMethod = () => {
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
        Payment option
      </Typography>
      <Box
        sx={{
          margin: "0 5rem 0 5rem",
          "@media (max-width: 650px)": {
            margin: "0 1.5rem 0 1.5rem",
          },
          "@media (max-width: 450px)": {
            margin: "0 1rem 0 1rem",
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5rem)",
          }}
        >
          <CardActionArea sx={{ cursor: "default" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <PaymentIcon
                  sx={{ color: "#FFF", fontSize: "2rem", padding: "1rem" }}
                />
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    color: "#FFF",
                    fontSize: "1rem",
                    marginLeft: "3rem",
                    "@media (max-width: 600px)": {
                      marginLeft: "1rem",
                    },
                    "@media (max-width: 500px)": {
                      fontSize: "0.8rem",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "0.7rem",
                    },
                  }}
                >
                  At Inter-Galaxy Travels, we've shattered the boundaries of
                  conventional travel. Step into a world where space exploration
                  is no longer reserved for the At Inter-Galaxy Travels, we've
                  shattered the boundaries of conventional travel. Step into a
                  world whe shattered the boundaries of conventional travel.
                  Step into a world whe
                </Typography>
              </Box>
              <hr style={{ margin: "0.5rem 0" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  px: 1,
                  // marginTop: "2vw",
                }}
              >
                <PaymentMethodOption />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
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
          Please remember my payment information for future visits.
        </Typography>
      </Box>
    </Box>
  );
};
export default PaymentMethod;
