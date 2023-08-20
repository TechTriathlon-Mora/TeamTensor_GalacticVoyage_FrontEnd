import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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

const BookingPersonDetailsModal = ({ open, onClose, selectedPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [national, setNational] = useState("");

  const handleChange = (event) => {
    setNational(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>
              Person {selectedPerson.number} - {selectedPerson.type}
            </b>
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
              <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                First Name and Middle Name*
              </FormLabel>
              <TextField
                id="name"
                name="name"
                type="text"
                label=""
                variant="outlined"
                value={firstName}
                fullWidth
                onChange={handleFirstNameChange}
                sx={textFieldStyle}
              />
              <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                Last Name*
              </FormLabel>
              <TextField
                id="name"
                name="name"
                type="text"
                label=""
                variant="outlined"
                value={lastName}
                fullWidth
                onChange={handleLastNameChange}
                sx={textFieldStyle}
              />
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                      "StaticDatePicker",
                    ]}
                  >
                    <DemoItem label="Desktop variant">
                      <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              <div>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ ...inputstyle, marginTop: "1vw" }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <FormLabel marginBottom="0.5vw" sx={inputstyle}>
                    Nationality*
                  </FormLabel>
                  <Select
                    labelId="text"
                    id="text"
                    value={national}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Sri Lankan</MenuItem>
                    <MenuItem value={20}>American</MenuItem>
                    <MenuItem value={30}>Austrian</MenuItem>
                  </Select>
                </FormControl>
              </div>

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
export default BookingPersonDetailsModal;

const inputstyle = {
  color: "#000000",
  fontSize: "0.8rem",
};

const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    // height: "2.5vw",
  },
};
