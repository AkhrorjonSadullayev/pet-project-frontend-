import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Grid, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import underline from '../../assets/UnderLine.svg';

type NewPostedProps = {
    PostedList: {
        id: number;
        image: string;
        date: string;
        desc: string;
    }[],
};

const SeconConComponent: React.FC<NewPostedProps> = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const itemsPerView = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        if (props.PostedList.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerView) % props.PostedList.length);
    }, [props.PostedList.length, itemsPerView]);

    const handlePrev = useCallback(() => {
        if (props.PostedList.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerView + props.PostedList.length) % props.PostedList.length);
    }, [props.PostedList.length, itemsPerView]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4, position: 'relative', backgroundColor: '#F2EDED', padding: 4, borderRadius: 2 }}>
            <Paper elevation={3} sx={{ width: '90%', maxWidth: '1200px', padding: 4, borderRadius: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>Blog Post</Typography>
                    <Typography variant="h1" component="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Latest News Post</Typography>
                    <img src={underline} alt="underline" style={{ width: '100px', marginTop: '10px' }} />
                </Box>

                <Grid container spacing={2} justifyContent="center">
                    {props.PostedList.slice(currentIndex, currentIndex + itemsPerView).map(({ id, image, date, desc }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                <img
                                    src={image}
                                    alt="news-img"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s', borderRadius: '10px 10px 0 0' }}
                                />
                                <Box sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="body2" color="textSecondary">{date}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>{desc}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Button
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        sx={{
                            background: 'linear-gradient(45deg, #B35A5B 30%, #7F4D4F 90%)',
                            color: 'white',
                            borderRadius: '50%',
                            width: 48,
                            height: 48,
                            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
                            '&:hover': { background: 'linear-gradient(45deg, #9B686A 30%, #7F4D4F 90%)' },
                            position: 'absolute',
                            top: '50%',
                            left: '16px',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                        }}
                    >
                        <ArrowBackIcon />
                    </Button>

                    <Button
                        onClick={handleNext}
                        aria-label="Next Slide"
                        sx={{
                            background: 'linear-gradient(45deg, #B35A5B 30%, #7F4D4F 90%)',
                            color: 'white',
                            borderRadius: '50%',
                            width: 48,
                            height: 48,
                            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
                            '&:hover': { background: 'linear-gradient(45deg, #9B686A 30%, #7F4D4F 90%)' },
                            position: 'absolute',
                            top: '50%',
                            right: '16px',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                        }}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Box>

                {/* Active Indicators */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    {Array.from({ length: Math.ceil(props.PostedList.length / itemsPerView) }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'inline-block',
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: currentIndex / itemsPerView === index ? '#7F4D4F' : '#ccc',
                                mx: 0.5,
                                transition: 'background-color 0.3s',
                            }}
                        />
                    ))}
                </Box>
            </Paper>
        </Box>
    );
};

export default SeconConComponent;
