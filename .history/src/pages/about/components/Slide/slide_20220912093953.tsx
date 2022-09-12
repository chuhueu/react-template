import React from "react";
import { createTheme, useTheme, styled } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import "./slide.css";

function Slide() {
  return (
    <Box>
      <Typography variant="subtitle2" mb={2} textAlign="center" paddingTop="0">
        Our Clients
      </Typography>
      <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
        Well-known agencies
      </Typography>
      <Typography
        variant="subtitle1"
        mb={3}
        fontSize="16px"
        lineHeight="34px"
        color=" #8B8B8B;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Box>
  );
}

export default Slide;
