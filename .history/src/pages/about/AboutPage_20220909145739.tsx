import React from "react";
import { createTheme } from "@mui/material/styles";

import "./about.css";

import { Slogan } from "./components/BusinessSlogan";
import { Vision } from "./components/SectionVisions";
// import { Teams } from "./components/Teams";
// import { Video } from "./components/Video";
// import { SectionAbout } from "./components/SectionAbout";
// import { ButtonOnTop } from "./components/ButtonOnTop";

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
      {/* <SectionAbout />
      <Video />
      <Teams /> */}
      <Slogan />
      <Vision />
      {/* <ButtonOnTop /> */}
    </>
  );
};
export default AboutPage;
