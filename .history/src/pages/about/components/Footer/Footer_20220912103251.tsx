import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BG from "assets/images/about/BG-3.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <img src={BG} alt="background" className="background-image-about" />
      <div>
        <div className="footer-bg1">
          <div className="footer-size-bar">
            <div className="footer-size-bar-left">
              <div className="footer-size-bar-content">
                <div className="footer-size-bar-logo">
                  <img src="./img/Footer Logo.png" alt=""></img>
                </div>
                <div className="footer-size-bar-content-text">
                  <div className="footer-size-bar-text">
                    Beautice is a Beauty Clinic WordPress Theme.
                  </div>
                  <div className="footer-size-bar-address">
                    Baker Steet 101, NY, United States.
                  </div>
                  <div className="footer-size-bar-mail-phone">
                    <div className="footer-size-bar-phone">
                      <ArrowRightIcon />
                      521 569 8966.
                    </div>
                    <div className="footer-size-bar-mail">
                      mail@company.com.
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <div className="social-media-logo">
                  <img src="./img/facebook-f.png" alt=""></img>
                </div>
                <div className="social-media-logo">
                  <img src="./img/twitter (1).png" alt=""></img>
                </div>
                <div className="social-media-logo">
                  <img src="./img/linkedin-in.png" alt=""></img>
                </div>
                <div className="social-media-logo">
                  <img src="./img/youtube.png" alt=""></img>
                </div>
                <div className="social-media-logo">
                  <img src="./img/instagram (1).png" alt=""></img>
                </div>
              </div>
            </div>
            <div className="footer-size-bar-right">
              <div className="size-map">
                <div className="pages">
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
                </div>
                <div className="informations">
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
                </div>
                <div className="alt-desain">
                  © AltDesain Studio 2021 - All right reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-bg2"></div> */}
        <div className="on-top">
          <a href="#">
            <img src="./img/ToTop Button.png" alt=""></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
