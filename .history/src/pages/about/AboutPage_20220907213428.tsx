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
        <Typography variant="h3" mb={2} textAlign="left"
        >We are a leading beauty clinic that has<br/>been around since 2002</Typography>
        <Box component="p" textAlign="left" lineHeight={"24px"}
         fontWeight="400" fontSize="16px" letterSpacing="1px"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,<br/> purus sit amet luctus venenatis</Box>
      </Box>
      <Box className='video'>
          <div className='play-video'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
            </div>
          </div>
      </Box>
   </>
  )
}

export default AboutPage
