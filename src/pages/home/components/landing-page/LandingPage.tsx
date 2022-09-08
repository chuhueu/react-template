import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './landing-page.css';
import CustomButton from 'components/CustomButton';
import treatment from 'assets/images/home/treatment.png';
import backgroundSideLarge from 'assets/images/home/slide-background1-large.png';

const useStyles = makeStyles({
    test: {
        color: "red",
    }
});

function LandingPage() {
    const classes = useStyles();

    return (
        <Box component="section" className = {classes.test}>
            <img src={backgroundSideLarge} alt="background" className="background-image" />
            <Box className={`landing-page ${classes.test}`} gap={2}>
                <Box>
                    <Typography variant="h2" mb={2}>
                        Clinic & beauty consultant
                    </Typography>
                    <Typography variant="subtitle1" mb={3}>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </Typography>
                    <CustomButton variant="contained" color="secondary">
                        More Details
                    </CustomButton>
                </Box>
                <Box>
                    <img src={treatment} alt="treatment" />
                </Box>
            </Box>
        </Box>
    );
}

export default LandingPage;
