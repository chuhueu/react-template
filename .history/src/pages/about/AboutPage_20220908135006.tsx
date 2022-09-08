import React from 'react';
import { Box, Container,Typography } from '@mui/material'
import "./about.css";

import BG from "assets/images/about/BG-3.png";
import professionalCenter from "assets/images/about/professionalCenter.png";
import professionalLeft from "assets/images/about/professionalLeft.png";
import professionalRight from "assets/images/about/professionalRight.png";
import facebook from "assets/images/about/facebook.png";
import Twitter from "assets/images/about/Twitter.png";
import Instagram from "assets/images/about/Instagram.png";


import { Slogan } from "./components/BusinessSlogan";
import { Vision } from "./components/SectionVisions";

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
      {/* <img src={BG} alt="background" className="background-image"/> */}
          <Box>
          <Box className='video' paddingTop="58px">
      
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
      <Box component="section" marginTop={"-358px"} > 
      <img src={BG} alt="background" className="background-image-about"/>
          <Box>
             <Box  paddingTop="153px">
                 <Box component="section" >
                     <Typography variant="subtitle2" mb={2} textAlign="center" marginTop="362px" marginBottom="12px">Professional Teams</Typography>
                     <Typography variant="h3" mb={2} textAlign="center">The Professional expert</Typography>
                  <Box component="p" textAlign="center" marginBottom="87px">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Box>
             </Box>
             </Box>
             <Box className='professional-teams'>
                    <Box className='professional-teams-box'>
                    <Box className='professionalCenter-img'>
                             <img src ={professionalLeft}></img>
                            
                        </Box>
                        <Typography variant="subtitle2" mb={2} textAlign="center" 
                               marginBottom="15px"  fontSize="16px">Dermatologist
                        </Typography>
                        <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">Bella sebastian</Typography>
                        <Box component="p" textAlign="center"  fontSize="14px" lineHeight={"21px"}letterSpacing="1px"
                             marginBottom="50px"
                        >
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Box>
                        <Box className='profile-footer'>
                            <ul>
                                <li>
                                    <img src={Twitter} alt="Twitter"/>
                                </li>
                                <li>
                                <img src={facebook} alt="facebook"/>
                                </li>
                                <li>
                                <img src={Instagram} alt="Instagram"/>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className='professional-teams-box-center'>
                        <Box className='professionalCenter-img'>
                             <img src ={professionalCenter}></img>
                            
                        </Box>
                        <Typography variant="subtitle2" mb={2} textAlign="center" 
                               marginBottom="15px"  fontSize="16px">Dermatologist
                        </Typography>
                        <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">Bella sebastian</Typography>
                        <Box component="p" textAlign="center"  fontSize="14px" lineHeight={"21px"}letterSpacing="1px"
                             marginBottom="50px"
                        >
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Box>
                        <Box className='profile-footer'>
                            <ul>
                                <li>
                                    <img src={Twitter} alt="Twitter"/>
                                </li>
                                <li>
                                <img src={facebook} alt="facebook"/>
                                </li>
                                <li>
                                <img src={Instagram} alt="Instagram"/>
                                </li>
                            </ul>
                        </Box>

                    </Box>
                    <Box className='professional-teams-box'>
                    <Box className='professionalCenter-img'>
                             <img src ={professionalRight}></img>
                            
                        </Box>
                        <Typography variant="subtitle2" mb={2} textAlign="center" 
                               marginBottom="15px"  fontSize="16px">Dermatologist
                        </Typography>
                        <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">Bella sebastian</Typography>
                        <Box component="p" textAlign="center"  fontSize="14px" lineHeight={"21px"}letterSpacing="1px"
                             marginBottom="50px"
                        >
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Box>
                        <Box className='profile-footer'>
                            <ul>
                                <li>
                                    <img src={Twitter} alt="Twitter"/>
                                </li>
                                <li>
                                <img src={facebook} alt="facebook"/>
                                </li>
                                <li>
                                <img src={Instagram} alt="Instagram"/>
                                </li>
                            </ul>
                        </Box>
                    </Box>
             </Box>
          </Box>
      </Box>
      <Slogan/>
      <Vision/>
   </>
  )
}

export default AboutPage
