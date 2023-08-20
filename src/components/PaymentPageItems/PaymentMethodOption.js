import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Master from "../../assets/payment/master.png";
import Visa from "../../assets/payment/visa.png";
import Cirrus from "../../assets/payment/cirrus.png";
import DinnersClub from "../../assets/payment/dinners-club.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const PaymentMethodOption = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              color: "#ffffff",
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
            Credit/Debit card
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="master"
                control={<Radio />}
                label={
                  <img
                    src={Master}
                    alt="master"
                    style={{
                      width: "2.5rem",
                      height: "1.7rem",
                      marginRight: "1rem",
                      
                    }}
                  />
                }
              />

              <FormControlLabel
                value="visa"
                control={<Radio />}
                label={
                  <img
                    src={Visa}
                    alt="visa"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      marginRight: "1rem",
                    }}
                  />
                }
              />
              <FormControlLabel
                value="cirrus"
                control={<Radio />}
                label={
                  <img
                    src={Cirrus}
                    alt="master"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      marginRight: "1rem",
                    }}
                  />
                }
              />
              <FormControlLabel
                value="dinners-club"
                control={<Radio />}
                label={
                  <img
                    src={DinnersClub}
                    alt="dinners-club"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      marginRight: "1rem",
                    }}
                  />
                }
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            sx={{
              color: "#ffffff",
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
            Digital wallets
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            sx={{
              color: "#ffffff",
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
            Mobile Pay
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography
            sx={{
              color: "#ffffff",
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
            PSP
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
export default PaymentMethodOption;
