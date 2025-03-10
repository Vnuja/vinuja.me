import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const ExperienceData = [
  {
    image: 'https://iplay.lk/wp-content/themes/IPLAY.LK/assets/theme-images/main-logo.png',
    title: 'Social Media Marketing Intern',
    company: 'iPLAY.LK, Remote',
    duration: '2022',
  },
  {
    title: 'IT Assistant',
    company: 'New City Food Corner, Colombo 10',
    duration: '2018 - Present',
  },
  {
    image: 'https://preview.redd.it/kwapabdycdx81.jpg?width=720&format=pjpg&auto=webp&s=a3f804eae30ec1ba1b75820970eeb1e858b403d5',
    title: 'Social Media Designer',
    company: 'MSI Sri Lanka, Remote',
    duration: '2022',
  },
];

const Experience = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        color: 'white',
        marginTop: '60px',
        background: 'linear-gradient(to right, #1a1a1a, #333)',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#c70039' }}>
        Experience
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {ExperienceData.map((exp, index) => (
          <Grid item key={index} xs={12} sm={6} md={3.5}>
            <Card
              sx={{
                border: '2px solid rgb(255, 255, 255)',
                borderRadius: '15px',
                maxWidth: 400,
                margin: 'auto',
                backgroundColor: '#222222',
                color: 'white',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(199, 0, 57, 0.5)',
                },
              }}
            >
              {exp.image ? (
                <CardMedia component="img" height="200" image={exp.image} alt={exp.title} />
              ) : (
                <Box
                  sx={{
                    height: 200,
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'gray',
                  }}
                >
                  <Typography variant="body2">No Image Available</Typography>
                </Box>
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: '#f8f8f8', fontWeight: 'bold' }}>
                  {exp.title}
                </Typography>
                <Typography variant="body1" color="gray">
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="gray">
                  {exp.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
