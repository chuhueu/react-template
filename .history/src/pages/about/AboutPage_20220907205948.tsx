import React from 'react';
import { Box, Container,Typography } from '@mui/material'
import "./about.css";

import backgroundSideLarge from "assets/images/home/slide-background1-large.png";
import treatment from "assets/images/home/treatment.png";
import CustomButton from "components/CustomButton";
const AboutPage = () => {
  return (
   <>
       <Box component="section">
        <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="75px">About</Typography>
        <Typography variant="h3" mb={2} textAlign="left">We are a leading beauty clinic that has<br/>been around since 2002</Typography>
        <Box component="p" textAlign="left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</Box>
      </Box>
   </>
  )
}

export default AboutPage
