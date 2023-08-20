import React from "react";
import { Grid, Box, Typography} from "@mui/material";
import PlanetImage from "../../assets/backgroundImage.png";

const LandingPageItem = () => {
  return (
    <Box
      sx={{
        backgroundImage: ` url(${PlanetImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        maxWidth: "100%",
        width: "auto",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        padding: "0 5vw",
      }}
    >
      <Grid
        container
        rowSpacing={5}
        columnSpacing={10}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 5, sm: 10 } }}
      >
        <Grid item xs={6} sm={6} md={6} lg={6}>
          {/* <img
                alt="Logo"
                src={PlanetImage}
                style={{
                  Width: "50vw",
                  height: "auto",
                  objectFit: "cover",

                }}
              /> */}
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography
            variant="h4"
            component="h1"
            pb={1}
            sx={{
              color: "white",
              textAlign: { xs: "center", sm: "centr", md: "left", lg: "left" },
            }}
          >
            Ready To Take Off to Another Planet?
          </Typography>
          <Typography
            pb={3}
            sx={{
              textAlign: { xs: "right", sm: "right", md: "right", lg: "right" },
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.4rem", lg: "2rem" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LandingPageItem;
