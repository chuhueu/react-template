import React from 'react';
import { Box, Container,Typography } from '@mui/material'
import "./about.css";

import BG from "assets/images/about/BG-3.png";
import play from "assets/images/about/plays.png";
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
      <Box component="section" > 
      <img src={BG} alt="background" className="background-image"/>
          <Box>
          <Box className='video' paddingTop="72px">
      
               <Box className='play-video'>
                  <Box className='play-video-icon'>
                      <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.0667 13.0012C26.4 13.771 26.4 15.6955 25.0666 16.4653L3.56665 28.8783C2.23332 29.6481 0.566651 28.6859 0.566651 27.1463L0.566652 2.32022C0.566652 0.780617 2.23332 -0.181632 3.56665 0.588168L25.0667 13.0012Z" fill="white"/>
                       </svg>
                 </Box>
              </Box>
          </Box>
          </Box>
      </Box>
   </>
  )
}

export default AboutPage
