import { Box, Typography, Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import img1 from 'assets/images/gallery/1.png';
import img2 from 'assets/images/gallery/2.png';
import img3 from 'assets/images/gallery/3.png';
import img4 from 'assets/images/gallery/4.png';
import img5 from 'assets/images/gallery/5.png';
import img6 from 'assets/images/gallery/6.png';
import img7 from 'assets/images/gallery/7.png';
import img8 from 'assets/images/gallery/8.png';
import img9 from 'assets/images/gallery/9.png';
import './our-gallery.css';

const useStyles = makeStyles((theme: any) => ({
    responseTitleGallery: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        },
    },
    responseDescription: {
        [theme.breakpoints.down('md')]: {
            width:'100% !important',
        },
    },

}));

function OurGallery() {
    const classes = useStyles();

    return (
        <Box component="section">
            <Box pt={10}>
                <Typography variant="subtitle2">Our Gallery</Typography>
                <Box mt={1.5} className={`gallery-title ${classes.responseTitleGallery}`} gap={2}>
                    <Typography variant="h3">Check out the collection pictures from our clinic</Typography>
                    <Typography variant="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis.
                    </Typography>
                </Box>
                <Grid container item pt={9.8}>
                    <Grid>
                        <ImageList sx={{ width: '100%' }} cols={3}>
                            {itemData.map((item) => (
                                <ImageListItem
                                    className="list-img_gallery"
                                    sx={{ paddingRight: '35px', paddingBottom: '35px' }}
                                    key={item.img}
                                >
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid
                        className={`description-gallery-img ${classes.responseDescription}`}
                        sx={{ width: '50%' }}
                        pt={9}
                    >
                        <Typography variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,{' '}
                            <strong>our teams</strong>.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}

const itemData = [
    {
        img: img1,
        title: 'ImageGallery',
    },
    {
        img: img2,
        title: 'ImageGallery',
    },
    {
        img: img3,
        title: 'ImageGallery',
    },
    {
        img: img4,
        title: 'ImageGallery',
    },
    {
        img: img5,
        title: 'ImageGallery',
    },
    {
        img: img6,
        title: 'ImageGallery',
    },
    {
        img: img7,
        title: 'ImageGallery',
    },
    {
        img: img8,
        title: 'ImageGallery',
    },
    {
        img: img9,
        title: 'ImageGallery',
    },
];

export default OurGallery;
