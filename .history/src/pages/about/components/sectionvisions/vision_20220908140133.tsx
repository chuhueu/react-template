import React from 'react';
import { Box,Typography } from '@mui/material'
import "./vision.css";
import Illustration from "assets/images/about/Illustration.png";
import Illustration2 from "assets/images/about/Illustration2.png";
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
            <Typography variant="subtitle1" mb={3} fontSize="16px" lineHeight="34px" color=" #8B8B8B;">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
             </Typography>
              <Typography variant="subtitle1"  fontSize="16px" lineHeight="34px" color=" #8B8B8B;">
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</Typography>
          </Box>

        </Box>

        {/* Our Mission  */}

        <Box className="landing-page" gap={2} mt={18}>
        
            <Box className="section-vision-content">
              <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="0" fontSize="16px">Our Mission</Typography>
               <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>Special & premium service to any clients</Typography>
                <Typography variant="subtitle1" mb={3} fontSize="16px" lineHeight="34px" color=" #8B8B8B;">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                </Typography>
                <Typography variant="subtitle1"  fontSize="16px" lineHeight="34px" color=" #8B8B8B;">
                Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</Typography>
           </Box>
           <Box className="section-vision-img">
            <img src={Illustration2} alt="treatment" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Vision