import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const educationData = [
    {
        image: 'https://static.sliit.lk/wp-content/uploads/2018/03/SLIIT-malabe.jpg', 
        title: 'BSc in Information Technology',
        institution: 'SLIIT University',
        duration: '2021 - Present',
    },
    {
        image: 'https://www.allceylon.lk/images/location/2016/03/University-of-Colombo-1457752778.jpeg', 
        title: 'Diploma in Information Technology',
        institution: 'University of Colombo IHRA Institute',
        duration: '2019 - 2021',
    },
    {
        image: 'https://www.allceylon.lk/images/location/2016/03/University-of-Colombo-1457752778.jpeg', 
        title: 'Diploma in English',
        institution: 'University of Colombo IHRA Institute',
        duration: '2019 - 2021',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbcp6T7wv621yJ4mzM7_oRyTncpQ_7bQBqQ&s', 
        title: 'Certificate of Project Management Foundation',
        institution: 'University of Moratuwa - Faculty of Computing',
        duration: '2024',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbcp6T7wv621yJ4mzM7_oRyTncpQ_7bQBqQ&s', 
        title: 'Certificate of Web Development Foundation',
        institution: 'University of Moratuwa - Faculty of Computing',
        duration: '2024',
    },
    {
        image: 'https://tcnbandara.me/assets/img/education/GCE.jpg', 
        title: 'GCE Advanced Level Exam / Technology Stream',
        institution: 'Mahinda Rajapaksha College - Homagama',
        results: 'ICT - C, ET - C, SFT - S, English - C',
    },
    {
        image: 'https://tcnbandara.me/assets/img/education/GCE.jpg', 
        title: 'GCE Ordinary Level Exam - 2018',
        institution: 'Mahinda Rajapaksha College - Homagama',
        results: 'Maths - A, ICT - A, Science - B, English - C',
    },
];

const Education = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        marginTop: '60px',
        background: 'linear-gradient(to right, #1a1a1a, #333333)',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#c70039', fontWeight: 'bold', marginBottom: 4 }}>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item key={index} xs={12} sm={6} md={3.5}>
            <Card
              sx={{
                border: '2px solid #c70039',
                borderRadius: '12px',
                maxWidth: 400,
                margin: 'auto',
                backgroundColor: '#222222',
                color: 'white',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(255, 76, 76, 0.4)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={edu.image}
                alt={edu.title}
                sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#c70039' }}>
                  {edu.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'lightgray', fontSize: '15px' }}>
                  {edu.institution}
                </Typography>
                {edu.duration && (
                  <Typography variant="body2" sx={{ color: '#cccccc', marginTop: 1 }}>
                    📅 {edu.duration}
                  </Typography>
                )}
                {edu.results && (
                  <Typography variant="body2" sx={{ color: '#cccccc', marginTop: 1 }}>
                    🏆 {edu.results}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
