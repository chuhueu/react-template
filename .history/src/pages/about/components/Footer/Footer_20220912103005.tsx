import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Home
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      About
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Services
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Gallery
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Team
                    </li>
                  </ul>
                </div>
                <div className="informations">
                  <h4>Informations</h4>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      About
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Services
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
                      Gallery
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>{" "}
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
