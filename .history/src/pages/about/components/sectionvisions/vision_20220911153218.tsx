import React from "react";
import { createTheme, useTheme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./vision.css";
import Illustration from "assets/images/about/Illustration.png";
import Illustration2 from "assets/images/about/Illustration2.png";
// const useStyles = makeStyles({
//   customLink: {
//     backgroundColor: "red",
//   },
// });
const useStyles = makeStyles((theme: any) => ({
  customLink: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "red",
    },
  },
}));
function Vision() {
  const classes = useStyles();
  return (
    <Box>
      <Box component="section" mt={30}>
        <Grid className="landing-page-about" container>
          <Grid
            item
            // className="section-vision-img"
            xs={12}
            lg={5}
            md={12}
            sm={12}
            className={`section-vision-img ${classes.customLink}`}
          >
            <img src={Illustration} alt="treatment" />
          </Grid>
          <Grid
            item
            className="section-vision-content"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <Typography
              variant="subtitle2"
              mb={2}
              textAlign="left"
              paddingTop="0"
              fontSize="16px"
            >
              Our Vision
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
              Be the best and go international
            </Typography>
            <Typography
              variant="subtitle1"
              mb={3}
              fontSize="16px"
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="16px"
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
              suspendisse placerat.
            </Typography>
          </Grid>
        </Grid>

        {/* Our Mission  */}

        <Grid container className="landing-page" gap={24} mt={18}>
          <Grid
            item
            className="section-vision-content"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <Typography
              variant="subtitle2"
              mb={2}
              textAlign="left"
              paddingTop="0"
              fontSize="16px"
            >
              Our Mission
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
              Special & premium service to any clients
            </Typography>
            <Typography
              variant="subtitle1"
              mb={3}
              fontSize="16px"
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat faci lisi eu
              libero.
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="16px"
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
              suspendisse placerat.
            </Typography>
          </Grid>
          <Grid
            item
            className="section-vision-img"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <img src={Illustration2} alt="treatment" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Vision;
