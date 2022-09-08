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
        <Typography variant="subtitle2" mb={2} textAlign="center">Main Services</Typography>
        <Typography variant="h3" mb={2} textAlign="center">Learn services to focus <br/> on your beauty</Typography>
        <Box component="p" textAlign="center">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, <br/> feugiat tellus sagittis, scelerisque eget nulla turpis.</Box>
      </Box>
   </>
  )
}

export default AboutPage
