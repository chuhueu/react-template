import React from 'react';
import { Box,Typography } from '@mui/material'
import "./vision.css";
import Illustration from "assets/images/about/Illustration.png";
const Vision= () => {
  return(
    <>
      <Box component="section" mt={30}>
        <Box className="landing-page" gap={2}>
        <Box className="section-vision-img">
            <img src={Illustration} alt="treatment" />
          </Box>
          <Box className="section-vision-content">
          <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="0" fontSize="16px">Our Vision</Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>Be the best and go international</Typography>
            <Typography variant="subtitle1" mb={3} fontSize="16px" lineHeight="34px">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/>

              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</Typography>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default Vision