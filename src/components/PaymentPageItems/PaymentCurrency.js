import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

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
        Use another currency?
      </Typography>
      <Box
        sx={{
          margin: "0 5rem 0 5rem",
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
                <MoneyIcon
                  sx={{ color: "#FFF", fontSize: "2rem", padding: "1rem" }}
                />
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    color: "#FFF",
                    fontSize: "1rem",
                    marginLeft: "3rem",
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
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    flexGrow: 1,
                    color: "#FFB800",
                    fontSize: "1.2rem",
                    marginLeft: "1rem",
                  }}
                >
                  Select a currency :
                </Typography>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  defaultValue="EUR"
                  helperText="Please select your currency"
                  sx={{
                    marginLeft: "0rem",
                    width: "20rem",
                    "& .MuiInputLabel-root": {
                      color: "#FFF", // Set the label color to white
                    },
                    "& .MuiInputBase-root": {
                      color: "#FFF", // Set the input text color to white
                    },
                    "& .MuiInput-underline:before, & .MuiInput-underline:after":
                      {
                        borderBottomColor: "#FFF", // Set the underline color to white
                      },
                    "& .MuiSelect-icon": {
                      color: "#FFF", // Set the select icon color to white
                    },
                    "& .MuiMenuItem-root": {
                      color: "#FFF", // Set the menu item color to white
                    },
                    "& .MuiFormHelperText-root": {
                      color: "#FFF", // Set the helper text color to white
                    },
                  }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
export default PaymentCurrency;
