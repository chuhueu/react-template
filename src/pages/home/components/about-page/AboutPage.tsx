import { Box, Typography } from '@mui/material';

import CustomButton from 'components/CustomButton';
import './about-page.css';
import imgAbout from 'assets/images/home/about.png';
import backgroundSideAbout from 'assets/images/home/BG-1.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function AboutPage() {
    return (
        <Box component="section">
            <img src={backgroundSideAbout} alt="backgroundAbout" className="img-about" />

            <Box className="about-page" gap={2}>
                <Box className="about-text">
                    <Typography variant="subtitle2" textAlign="left" mb={1.5}>
                        About us
                    </Typography>
                    <Typography variant="h3" textAlign="left" mb={2.5}>
                        We are the best beauty clinic
                    </Typography>
                    <Box className="about-substring">
                        <Typography variant="inherit" textAlign="left" fontSize={16}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </Typography>
                        <Typography variant="inherit" textAlign="left" fontSize={16} mb={2.5}>
                            <br />
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <CustomButton variant="contained" color="secondary">
                        Learn More
                    </CustomButton>
                </Box>

                <Box className="about-img" ml={2}>
                    <img src={imgAbout} alt="imgAbout" width="476" height="350" />
                </Box>
            </Box>
        </Box>
    );
}

export default AboutPage;
