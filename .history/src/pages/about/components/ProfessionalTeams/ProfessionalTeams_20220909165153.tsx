import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import "./ProfessionalTeams.css";
const Slogan = () => {
  return (
    <>
      <Grid className="professional-teams" container mb={1}>
        <Grid
          className="professional-teams-box-center"
          item
          lg={4}
          sm={12}
          xs={12}
          md={12}
        >
          <Box className="professionalCenter-img">
            <img src={professionalLeft}></img>
          </Box>
          <Typography
            variant="subtitle2"
            mb={2}
            textAlign="center"
            marginBottom="15px"
            fontSize="16px"
          >
            Dermatologist
          </Typography>
          <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">
            Bella sebastian
          </Typography>
          <Box
            component="p"
            textAlign="center"
            fontSize="14px"
            lineHeight={"21px"}
            letterSpacing="1px"
            marginBottom="50px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Box>
          <Box className="profile-footer">
            <List>
              <ListItem>
                <img src={Twitter} alt="Twitter" />
              </ListItem>
              <ListItem>
                <img src={facebook} alt="facebook" />
              </ListItem>
              <ListItem>
                <img src={Instagram} alt="Instagram" />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          className="professional-teams-box-center box-center"
          item
          lg={4}
          sm={12}
          xs={12}
          md={12}
        >
          <Box className="professionalCenter-img">
            <img src={professionalCenter}></img>
          </Box>
          <Typography
            variant="subtitle2"
            mb={2}
            textAlign="center"
            marginBottom="15px"
            fontSize="16px"
          >
            Dermatologist
          </Typography>
          <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">
            Bella sebastian
          </Typography>
          <Box
            component="p"
            textAlign="center"
            fontSize="14px"
            lineHeight={"21px"}
            letterSpacing="1px"
            marginBottom="50px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Box>
          <Box className="profile-footer">
            <List>
              <ListItem>
                <img src={Twitter} alt="Twitter" />
              </ListItem>
              <ListItem>
                <img src={facebook} alt="facebook" />
              </ListItem>
              <ListItem>
                <img src={Instagram} alt="Instagram" />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          className="professional-teams-box-center"
          item
          lg={4}
          sm={12}
          xs={12}
          md={12}
        >
          <Box className="professionalCenter-img">
            <img src={professionalRight}></img>
          </Box>
          <Typography
            variant="subtitle2"
            mb={2}
            textAlign="center"
            marginBottom="15px"
            fontSize="16px"
          >
            Dermatologist
          </Typography>
          <Typography variant="h3" mb={2} textAlign="center" fontSize="18px">
            Bella sebastian
          </Typography>
          <Box
            component="p"
            textAlign="center"
            fontSize="14px"
            lineHeight={"21px"}
            letterSpacing="1px"
            marginBottom="50px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Box>
          <Box className="profile-footer">
            <List>
              <ListItem>
                <img src={Twitter} alt="Twitter" />
              </ListItem>
              <ListItem>
                <img src={facebook} alt="facebook" />
              </ListItem>
              <ListItem>
                <img src={Instagram} alt="Instagram" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Slogan;
