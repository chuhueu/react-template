import { Box, List, ListItemText, ListItem, ListItemButton, Typography, ListItemIcon, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { makeStyles } from '@mui/styles';
import { Link, withRouter } from 'react-router-dom';
import { useEffect } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import backgroundFooter from 'assets/images/home/Footer.png';
import footerLogo from 'assets/images/home/FooterLogo.png';
// import './footer-page.css';

const useStyles = makeStyles((theme: any) => ({
    responseFooter: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        },
    },
    responseRightFooter: {
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
            paddingBottom: '20px',
        },
    },
    backgroundFooter: {
        position: 'absolute',
        left: '0',
        right: '0',
        backgroundImage: `url(${backgroundFooter})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    iconsSection: {
        '& svg:hover': {
            color: '#f78da7',
        },
    },
    listPages: {
        padding: '0 !important',
    },
    contactFooter: {
        fontStyle: 'italic',
        fontWeight: '500',
        '&:hover': {
            cursor: 'pointer',
            color: ' rgb(242 244 255 / 95%)',
        },
    },
}));

const FooterPage = () => {
    const classes = useStyles();

    return (
        <Box component="section" overflow="hidden" className={classes.backgroundFooter}>
            <Grid container maxWidth={'1152px'} margin="0 auto" pt={31}>
                <Grid
                    item
                    lg={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                    gap={2}
                    className={classes.responseFooter}
                >
                    <Box>
                        <Box mb={2.5}>
                            <img src={footerLogo} alt="FooterLogo" />
                        </Box>
                        <Box mb={2.5}>
                            <Typography>Beautice is a Beauty Clinic WordPress Theme.</Typography>
                        </Box>
                        <Typography>Baker Steet 101, NY, United States.</Typography>
                        <List sx={[{ display: 'flex' }]}>
                            <ListItemText className={classes.contactFooter}>+521 569 8966.</ListItemText>
                            <ListItemText className={classes.contactFooter}>mail@company.com.</ListItemText>
                        </List>
                        <Box height="90px"></Box>
                    </Box>
                    <Box
                        className={classes.responseRightFooter}
                        display="flex"
                        width="50%"
                        justifyContent="space-around"
                    >
                        <Box>
                            <Box pl={2.3}>Pages</Box>
                            <List>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px' }}
                                    >
                                        Home
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <Link
                                        to="/about"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px' }}
                                    >
                                        About
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <Link
                                        to="/service"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px' }}
                                    >
                                        Service
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <Link
                                        to="/gallery"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px' }}
                                    >
                                        Gallery
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px' }}
                                    >
                                        Team
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Box pl={2.3}>Informations</Box>
                            <List>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <ListItemButton>Terms & conditions</ListItemButton>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <ListItemButton>Privacy policy</ListItemButton>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <ListItemButton>Blog</ListItemButton>
                                </ListItem>
                                <ListItem className={classes.listPages}>
                                    <ArrowRightIcon />
                                    <ListItemButton>Contact</ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    lg={12}
                    display="flex"
                    color="#fff"
                    justifyContent="space-between"
                    alignItems="center"
                    pb={14}
                >
                    <Box>
                        <List sx={[{ padding: '0' }]}>
                            <ListItemIcon sx={[{ color: '#fff' }]} className={classes.iconsSection}>
                                <ListItemButton>
                                    <FacebookIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <TwitterIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <LinkedInIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <YouTubeIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <InstagramIcon fontSize="large" />
                                </ListItemButton>
                            </ListItemIcon>
                        </List>
                    </Box>
                    <Box>
                        <Typography>© AltDesain Studio 2021 – All right reserved.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FooterPage;
