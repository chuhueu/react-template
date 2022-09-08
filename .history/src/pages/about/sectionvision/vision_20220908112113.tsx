import React from 'react';
import { Box,Typography } from '@mui/material'
import "./vision.css";
import Illustration from "assets/images/about/Illustration.png";
const Vision= () => {
  return(
    <>
      <Box component="section">
        <Box className="landing-page" gap={2}>
          <Box>
          <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="0">About</Typography>
            <Typography variant="h2" mb={2}>Be the best and go international</Typography>
            <Typography variant="subtitle1" mb={3}>Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/>

              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</Typography>
          </Box>
          <Box>
            <img src={Illustration} alt="treatment" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Vision