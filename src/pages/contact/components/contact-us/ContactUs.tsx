import { Box, Typography, Grid } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import './contact-us.css';
import ContactUsImg from 'assets/images/contact/animation-contacts.png';
import Bubble1 from 'assets/images/contact/Bubble1.png';
import { CustomButton } from 'components';

const useStyles = makeStyles((theme: any) => ({
    responseImg: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
        },
    },
    responseInput: {
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
        },
    },
    PaddingInput: {
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '0 !important',
        },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center !important',
        },
    },
    contactContainer: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
    imgBackgroundContact: {
        position: 'absolute',
        right: 0,
        zIndex: -1,
    },
    input: {
        backgroundColor: ' white !important',
        borderRadius: ' 15px',
        borderColor: ' #d9ddfe',
        outline: 'none !important',
    },
    contactInputBottom: {
        width: '100% !important',
        outline: 'none',
    },
    customsImageContact: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    customsTextContact: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" pt={12.5} pb={19}>
                <img src={Bubble1} alt="BackgroundContact" className={classes.imgBackgroundContact} />
                <Grid
                    container
                    className={`${classes.contactContainer} ${classes.responseImg}`}
                    gap={13.75}
                    flexWrap="nowrap"
                >
                    {/* Contact img  */}
                    <Grid item md={12} width="100%" className={classes.customsTextContact}>
                        <Typography variant="subtitle2" mb={1.5}>
                            Contact us
                        </Typography>
                        <Typography variant="h3" mb={2.5} pl={0.5} pr={1.5}>
                            Contact service for our customers
                        </Typography>
                        <img src={ContactUsImg} alt="ContactImg" className={classes.customsImageContact} />
                    </Grid>
                    {/* contacts form  */}
                    <Grid item md={12}>
                        <Typography
                            variant="inherit"
                            mb={2.5}
                            pt={4}
                            pb={6}
                            pl={22}
                            pr={2}
                            className={`${classes.PaddingInput}`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </Typography>

                        <Box>
                            <Box
                                className={`${classes.responseInput}`}
                                mb={5}
                                display={'flex'}
                                width="100%"
                                gap={2}
                                sx={{
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth placeholder="First Name" className={classes.input} />

                                <TextField fullWidth placeholder="Last Name" className={classes.input} />
                            </Box>

                            <Box
                                className={` ${classes.responseInput}`}
                                display={'flex'}
                                width="100%"
                                mb={5}
                                sx={{
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth placeholder="Email Address" className={classes.input} />
                            </Box>

                            <Box
                                className={` ${classes.responseInput}`}
                                mb={5}
                                display={'flex'}
                                width="100%"
                                sx={{
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth placeholder="Suject Message" className={classes.input} />
                            </Box>
                            <Box mb={2.5} display={'flex'} width="100%">
                                <TextareaAutosize
                                    className={`${classes.contactInputBottom} ${classes.responseInput}`}
                                    maxRows={4}
                                    aria-label="Your inquiry here"
                                    placeholder="Your inquiry here"
                                    style={{
                                        width: 450,
                                        height: 230,
                                        paddingTop: 15,
                                        paddingLeft: 25,
                                        fontFamily: '"Poppins", Sans-serif',
                                        fontSize: 14,
                                        borderRadius: 15,
                                        borderColor: '#d9ddfe',
                                    }}
                                />
                            </Box>

                            <CustomButton variant="contained" color="secondary">
                                Send Message
                            </CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* google map  */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.126753266187!2d105.78242!3d21.03015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b45ca965a5%3A0x2ef40f043f590681!2zQuG7h25oIFZp4buHbiAxOSAtIDggQuG7mSBDw7RuZyBBbg!5e0!3m2!1svi!2s!4v1663122319384!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    loading="lazy"
                ></iframe>
            </Box>
            <Box mb={1} width="100%" height="100%" pt={55}></Box>
        </>
    );
};

export default ContactUs;
