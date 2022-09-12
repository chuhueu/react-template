import React from "react";
import { createTheme, useTheme, styled } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import "./slide.css";

function Slide() {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        mb={2}
        textAlign="left"
        paddingTop="0"
        fontSize="16px"
      >
        Our Vision
      </Typography>
      <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
        Be the best and go international
      </Typography>
      <Typography
        variant="subtitle1"
        mb={3}
        fontSize="16px"
        lineHeight="34px"
        color=" #8B8B8B;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
        suscipit purus donec amet. Egestas volutpat facilisi eu libero.
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize="16px"
        lineHeight="34px"
        color=" #8B8B8B;"
      >
        Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
        suspendisse placerat.
      </Typography>
    </Box>
  );
}

export default Slide;
