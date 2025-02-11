import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const ExperienceData = [
      {
        image: 'https://iplay.lk/wp-content/themes/IPLAY.LK/assets/theme-images/main-logo.png', 
        title: 'Social Media Marketing Intern',
        company: 'iPLAY.LK, Remote',
        duration: '2022',
      },{
        title: 'IT Assistant',
        company: 'New City Food Corner, Colombo 10',
        duration: '2018 - Present',
      },{
        image: 'https://preview.redd.it/kwapabdycdx81.jpg?width=720&format=pjpg&auto=webp&s=a3f804eae30ec1ba1b75820970eeb1e858b403d5', 
        title: 'Social Media Designer ',
        company: 'MSI Sri Lanka, Remote',
        duration: '2022',
      },
];

const Experience = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, color: 'white',marginTop: '60px' }}>
      <Grid container spacing={4} justifyContent="center">
        {ExperienceData.map((exp, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ border: '2px solid #c70039', borderRadius: '10px', maxWidth: 400, margin: 'auto', backgroundColor: '#222222', color: 'white' }}>
              <CardMedia component="img" height="200" image={exp.image} alt={exp.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="body1" color="gray">
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="gray">
                  {exp.duration}
                </Typography>
                <Typography variant="body2" color="gray">
                  {exp.results}
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
