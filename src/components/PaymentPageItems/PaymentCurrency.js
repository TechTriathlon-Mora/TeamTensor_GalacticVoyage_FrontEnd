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
          "@media (max-width: 472px)": {
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "0 0rem 0 0rem",
          },
        }}
      >
        Use another currency?
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
                    "@media (max-width: 700px)": {
                      fontSize: "1rem",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "0.8rem",
                    },
                    "@media (max-width: 350px)": {
                      fontSize: "0.7rem",
                    },
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
                      color: "#FFF",
                      "@media (max-width: 700px)": {
                        fontSize: "0.8rem",
                      },
                      "@media (max-width: 525px)": {
                        fontSize: "0.7rem",
                      },
                    },
                    "& .MuiInputBase-root": {
                      color: "#FFF",
                    },
                    "& .MuiInput-underline:before, & .MuiInput-underline:after":
                      {
                        borderBottomColor: "#FFF",
                      },
                    "& .MuiSelect-icon": {
                      color: "#FFF",
                    },
                    "& .MuiMenuItem-root": {
                      color: "#FFF",
                    },
                    "& .MuiFormHelperText-root": {
                      color: "#FFF",
                      "@media (max-width: 700px)": {
                        fontSize: "0.7rem",
                      },
                      "@media (max-width: 525px)": {
                        fontSize: "0.6rem",
                      },
                    },
                    "@media (max-width: 700px)": {
                      width: "18rem",
                    },
                    "@media (max-width: 525px)": {
                      width: "15rem",
                    },
                    "@media (max-width: 475px)": {
                      width: "13rem",
                    },
                    "@media (max-width: 425px)": {
                      width: "10rem",
                    },
                    "@media (max-width: 355px)": {
                      width: "8rem",
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
