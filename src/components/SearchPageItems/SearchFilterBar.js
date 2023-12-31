import { Box } from "@mui/material";
import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const SearchFilterBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "10vh",
        marginTop: "1rem",
        marginBottom: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FilterAltOutlinedIcon
        sx={{
          color: "#FFF",
          fontSize: "3rem",
          padding: "0 0rem 0 5rem",
          "@media (max-width: 500px)": {
            padding: "0 0rem 0 2rem",
            fontSize: "2rem",
          },
        }}
      />
      <CalendarMonthOutlinedIcon
        sx={{
          color: "#FFF",
          fontSize: "3rem",
          padding: "0 5rem 0 0rem",
          "@media (max-width: 500px)": {
            padding: "0 2rem 0 0rem",
            fontSize: "2rem",
          },
        }}
      />
    </Box>
  );
};
export default SearchFilterBar;
