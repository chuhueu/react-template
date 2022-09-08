import React from 'react';
import { Box, Container,Typography } from '@mui/material'
// import "./slogan.css";

import BG from "assets/images/about/BG-3.png";
import BackgroundMask from "assets/images/about/BackgroundMask.png";
import professionalLeft from "assets/images/about/professionalLeft.png";
import professionalRight from "assets/images/about/professionalRight.png";
import facebook from "assets/images/about/facebook.png";
import Twitter from "assets/images/about/Twitter.png";
import Instagram from "assets/images/about/Instagram.png";
const Slogan= () => {
  return(
    <>
      <Box component="section">
      <img src={BackgroundMask} alt="background" className="BackgroundMask"/>
        <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="75px">About</Typography>
        <Typography variant="h3" mb={2} textAlign="left"
        >We are a leading beauty clinic that has<br/>been around since 2002</Typography>
        <Box component="p" textAlign="left" lineHeight={"24px"}
         fontWeight="400" fontSize="16px" letterSpacing="1px"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,<br/> purus sit amet luctus venenatis</Box>
      </Box>
    </>
  )
}

export default Slogan