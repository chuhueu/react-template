import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BG from "assets/images/about/BG-3.png";
import "./footer.css";
const Footer = () => {
  return (
    <Box>
      {/* <img src={BG} alt="background" className="background-image-footer" /> */}
      <Box>
        <Box className="footer-bg1">
          <Box className="footer-size-bar">
            <Box className="footer-size-bar-left">
              <Box className="footer-size-bar-content">
                <Box className="footer-size-bar-logo">
                  <img src="./img/Footer Logo.png" alt=""></img>
                </Box>
                <Box className="footer-size-bar-content-text">
                  <Box className="footer-size-bar-text">
                    Beautice is a Beauty Clinic WordPress Theme.
                  </Box>
                  <Box className="footer-size-bar-address">
                    Baker Steet 101, NY, United States.
                  </Box>
                  <Box className="footer-size-bar-mail-phone">
                    <Box className="footer-size-bar-phone">
                      <ArrowRightIcon />
                      521 569 8966.
                    </Box>
                    <Box className="footer-size-bar-mail">
                      mail@company.com.
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="social-media">
                <Box className="social-media-logo">
                  <img src="./img/facebook-f.png" alt=""></img>
                </Box>
                <Box className="social-media-logo">
                  <img src="./img/twitter (1).png" alt=""></img>
                </Box>
                <Box className="social-media-logo">
                  <img src="./img/linkedin-in.png" alt=""></img>
                </Box>
                <Box className="social-media-logo">
                  <img src="./img/youtube.png" alt=""></img>
                </Box>
                <Box className="social-media-logo">
                  <img src="./img/instagram (1).png" alt=""></img>
                </Box>
              </Box>
            </Box>
            <Box className="footer-size-bar-right">
              <Box className="size-map">
                <Box className="pages">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <ArrowRightIcon />
                      Home
                    </li>
                    <li>
                      <ArrowRightIcon />
                      About
                    </li>
                    <li>
                      <ArrowRightIcon />
                      Services
                    </li>
                    <li>
                      {" "}
                      <ArrowRightIcon />
                      Gallery
                    </li>
                    <li>
                      <ArrowRightIcon />
                      Team
                    </li>
                  </ul>
                </Box>
                <Box className="informations">
                  <h4>Informations</h4>
                  <ul>
                    <li>
                      <ArrowRightIcon />
                      About
                    </li>
                    <li>
                      <ArrowRightIcon />
                      Services
                    </li>
                    <li>
                      <ArrowRightIcon />
                      Gallery
                    </li>
                    <li>
                      <ArrowRightIcon />
                      Team
                    </li>
                  </ul>
                </Box>
                <Box className="alt-desain">
                  © AltDesain Studio 2021 - All right reserved.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
