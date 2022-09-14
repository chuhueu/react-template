import { Box, Typography, Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

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
function OurGallery() {
    return (
        <Box component="section">
            <Box pt={10}>
                <Typography variant="subtitle2">Our Gallery</Typography>
                <Box mt={1.5} className="gallery-title" gap={2}>
                    <Typography variant="h3">Check out the collection pictures from our clinic</Typography>
                    <Typography variant="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis.
                    </Typography>
                </Box>
                <Box pt={9.8}>
                    <ImageList sx={{ width: '100%' }} cols={3}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: img1,
        title: 'Breakfast',
    },
    {
        img: img1,
        title: 'Breakfast',
    },
    {
        img: img1,
        title: 'Breakfast',
    },
    {
        img: img1,
        title: 'Breakfast',
    },
    {
        img: img1,
        title: 'Breakfast',
    },
    {
        img: img1,
        title: 'Breakfast',
    },
    // {
    //     img: 'https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery2.png',
    //     title: 'Burger',
    // },
    // {
    //     img: 'https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery3.png',
    //     title: 'Camera',
    // },
    // {
    //     img: 'https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery4.png',
    //     title: 'Coffee',
    // },
    // {
    //     img: '',
    //     title: 'Hats',
    // },
    // {
    //     img: '{img6}',
    //     title: 'Honey',
    // },
    // {
    //     img: '{img7}',
    //     title: 'Basketball',
    // },
    // {
    //     img: '{img8}',
    //     title: 'Fern',
    // },
    // {
    //     img: '{img9}',
    //     title: 'Mushrooms',
    // },
];

export default OurGallery;
