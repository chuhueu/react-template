import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import "./about.css";
import { Slogan } from "./components/BusinessSlogan";
import { Vision } from "./components/SectionVisions";
import { ButtonOnTop } from "./components/ShowButtonOnTop";
import { ProfessionalTeams } from "./components/ProfessionalTeams";
import { Slide } from "./components/Slide";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";

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
      <Video />
      <ProfessionalTeams />
      <Slogan />
      <ButtonOnTop />
      <Vision />
      <Slide />
      <Footer />
    </>
  );
};

export default AboutPage;
