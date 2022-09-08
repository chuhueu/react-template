import React from 'react';
import { Box,Typography } from '@mui/material'
import "./slogan.css";
import BackgroundMask from "assets/images/about/Backgroundmask.png";
import backgroundSideLarge from "assets/images/home/slide-background1-large.png";
const Slogan= () => {
  return(
    <>
      <Box component="section" className='businessslogan' marginTop={"150px"} marginBottom={"112px"} height={"529px"}>
      <img src={BackgroundMask} alt="background" className="background-mask"/>
        <Box className='background-mask'>
        </Box>
        <Box className='slogan'> 
        <Typography variant="subtitle2" mb={2} textAlign="center" paddingTop="164px" color={"#ABB4FF"}>About</Typography>
         <Typography variant="h3" mb={2} textAlign="center" color={"#FFFFFF"}
         >We are a leading beauty clinic that has<br/>been around since 2002</Typography>
          <Box component="p" textAlign="center" lineHeight={"24px"}
           fontWeight="400" fontSize="16px" letterSpacing="1px" color={"#CACACA"}
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,<br/> purus sit amet luctus venenatis</Box>
        </Box>
      </Box>
    </>
  )
}

export default Slogan