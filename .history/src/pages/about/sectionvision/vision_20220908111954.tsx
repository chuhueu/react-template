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
            <Typography variant="h2" mb={2}>Be the best and go international</Typography>
            <Typography variant="subtitle1" mb={3}>It is a long established fact that a reader will be by the readable content of a page.</Typography>
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