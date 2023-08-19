import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { AlignHorizontalCenter } from "@mui/icons-material";

const SearchReturnCard = () => {
  const cardData = [
    {
      time1: "10:00",
      time2: "12:00",
      place1: "Mars",
      place2: "Earth",
      duration: "5 hours",
      cabin: "Business",
    },
    // {
    //   time1: "10:00",
    //   time2: "12:00",
    //   place1: "Mars",
    //   place2: "Earth",
    //   duration: "5 hours",
    //   cabin: "Business",
    // },
    
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0 5rem 0 5rem",
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
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
                sx={{
                    color: "#FFF",
                }}
              >
                {card.time1} - {card.place1}
              </Typography>
              <Typography gutterBottom variant="h5" component="div"
              sx={{
                    color: "#FFF",
                }}>
                {card.time2} - {card.place2}
              </Typography>
              <hr style={{ margin: "0.5rem 0" }} />
              <Box sx={{ 
                display: "flex", 
                flexDirection: "row"

               }}>
                <TimerOutlinedIcon sx={{ color: "#FFF",
                fontSize: "1.5rem",
                }} />
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1,
                    color: "#FFF",
                     }}
                >
                    Total Duration {card.duration}
                </Typography>
                
                </Box>
              <Typography variant="body2" color="text.secondary"
              sx={{
                    color: "#FFF",
                    padding: "0.5rem 0 0 0.3rem ",
              }}>
                <b>Cabin: </b>{card.cabin}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default SearchReturnCard;