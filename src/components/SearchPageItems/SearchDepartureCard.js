import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const SearchCard = () => {
  const cardData = [
    {
      time1: "10:00",
      time2: "12:00",
      place1: "Earth",
      place2: "Mars",
      duration: "5 hours",
      cabin: "Business",
    },
    {
      time1: "10:00",
      time2: "12:00",
      place1: "Earth",
      place2: "Mars",
      duration: "5 hours",
      cabin: "Business",
    },
    {
      time1: "10:00",
      time2: "12:00",
      place1: "Earth",
      place2: "Mars",
      duration: "5 hours",
      cabin: "Business",
    },
    {
      time1: "10:00",
      time2: "12:00",
      place1: "Earth",
      place2: "Mars",
      duration: "5 hours",
      cabin: "Business",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0 5rem 0 5rem",
        "@media (max-width: 500px)": {
          padding: "0 2rem 0 2rem",
        },
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "calc(33.33% - 1rem)",
            marginBottom: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5rem)",
            "@media (max-width: 800px)": {
              width: "100%",
            },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "#FFF",
                  "@media (max-width: 500px)": {
                    fontSize: "1.3rem",
                  },
                }}
              >
                {card.time1} - {card.place1}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "#FFF",
                  "@media (max-width: 500px)": {
                    fontSize: "1.3rem",
                  },
                }}
              >
                {card.time2} - {card.place2}
              </Typography>
              <hr style={{ margin: "0.5rem 0" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TimerOutlinedIcon
                  sx={{
                    color: "#FFF",
                    fontSize: "1.5rem",
                    "@media (max-width: 500px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    flexGrow: 1,
                    color: "#FFF",
                    "@media (max-width: 500px)": {
                      fontSize: "0.8rem",
                    },
                  }}
                >
                  Total Duration {card.duration}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#FFF",
                  padding: "0.5rem 0 0 0.3rem ",
                  "@media (max-width: 500px)": {
                    fontSize: "0.8rem",
                  },
                }}
              >
                <b>Cabin: </b>
                {card.cabin}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default SearchCard;
