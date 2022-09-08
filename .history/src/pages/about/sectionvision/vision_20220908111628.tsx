import React from 'react';
import { Box,Typography } from '@mui/material'
import "./vision.css";
import Backgroundmask from "assets/images/about/Backgroundmask.png";
const Vision= () => {
  return(
    <>
      <Box component="section">
        {/* Background image */}
        <img src={Backgroundmask} alt="background" className="background-image"/>
        <Box className="landing-page" gap={2}>
          <Box>
            <Typography variant="h2" mb={2}>Clinic & beauty consultant</Typography>
            <Typography variant="subtitle1" mb={3}>It is a long established fact that a reader will be by the readable content of a page.</Typography>
          </Box>
          <Box>
            <img src={Backgroundmask} alt="treatment" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Vision