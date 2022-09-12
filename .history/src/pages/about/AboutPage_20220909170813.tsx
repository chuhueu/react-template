import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import "./about.css";
import { Slogan } from "./components/BusinessSlogan";
import { Vision } from "./components/SectionVisions";
import { ButtonOnTop } from "./components/ShowButtonOnTop";
import { ProfessionalTeams } from "./components/ProfessionalTeams";
import { Video } from "./components/Video";

const AboutPage = () => {
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 640,
  //       md: 900,
  //       lg: 1024,
  //       xl: 1536,
  //     },
  //   },
  // });

  return (
    <>
      {/* <Box component="section">
        <Typography
          variant="subtitle2"
          mb={2}
          textAlign="left"
          paddingTop="75px"
        >
          About
        </Typography>
        <Typography variant="h3" mb={2} textAlign="left">
          We are a leading beauty clinic that has
          <br />
          been around since 2002
        </Typography>
        <Box
          component="p"
          textAlign="left"
          lineHeight={"24px"}
          fontWeight="400"
          fontSize="16px"
          letterSpacing="1px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          <br /> purus sit amet luctus venenatis
        </Box>
      </Box> */}
      <Video />
      <ProfessionalTeams />
      <Slogan />
      <ButtonOnTop />
      <Vision />
    </>
  );
};

export default AboutPage;
