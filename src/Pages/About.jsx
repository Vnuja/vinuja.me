import React from 'react';
import { FaCode, FaMobileAlt, FaPencilRuler, FaObjectGroup } from "react-icons/fa";
import {
  Container, Grid, Card, CardContent, Typography,
   Box, useMediaQuery, Divider, Chip
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const interests = [
  {
    icon: <FaCode style={{ fontSize: '2.5rem', color: '#ff9800' }} />,
    title: "Web Engineering",
    skills: ["Frontend Design", "Backend Engineering", "Full-Stack"],
  },
  {
    icon: <FaMobileAlt style={{ fontSize: '2.5rem', color: '#2196f3' }} />,
    title: "App Development",
    skills: ["Cross-Platform Apps", "Backend Integration", "Performance Tuning"],
  },
  {
    icon: <FaObjectGroup style={{ fontSize: '2.5rem', color: '#4caf50' }} />,
    title: "UI/UX Design",
    skills: ["Wireframing", "Prototyping", "User Research"],
  },
  {
    icon: <FaPencilRuler style={{ fontSize: '2.5rem', color: '#ffc107' }} />,
    title: "Graphic Designing",
    skills: ["Logo Design", "Branding", "Illustrations"],
  },
];

const Data = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ background: 'linear-gradient(120deg, #1a1a1a 60%, #2c2c2c 100%)', py: 7 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', color: '#fff' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Typography variant={isMobile ? "h4" : "h3"} sx={{ color: '#c70039', fontWeight: 'bold', letterSpacing: 2, marginTop: 5}}>
            About Me
          </Typography>
          <Divider sx={{ my: 2, bgcolor: '#c70039', borderRadius: 2 }} />
          <Typography variant="body1" sx={{ fontSize: '1.15em', mt: 2, color: '#cccccc', maxWidth: 600 }}>
            I'm an ambitious undergraduate at <strong>SLIIT University</strong> with a strong passion for technology and innovation.
            I also have hands-on experience in <strong>Videography</strong> and <strong>Graphic design</strong>.
          </Typography>
        </Box>

        <Divider sx={{ my: 4, bgcolor: '#c70039', borderRadius: 2 }} />
        <Chip label="Achievements" sx={{ bgcolor: '#c70039', color: '#fff', fontWeight: 'bold', mb: 2, fontSize: '1.1em' }} />
        <Typography variant="body1" sx={{ fontSize: '1.08em', color: '#cccccc', mt: 1, maxWidth: 600, mx: 'auto' }}>
          ✅ Developed smart systems for homes, vehicles, and computers — integrating tech into everyday applications.
        </Typography>

        <Divider sx={{ my: 4, bgcolor: '#c70039', borderRadius: 2 }} />
        <Chip label="Personal Interests" sx={{ bgcolor: '#c70039', color: '#fff', fontWeight: 'bold', mb: 2, fontSize: '1.1em' }} />
        <Typography variant="body1" sx={{ fontSize: '1.15em', color: '#cccccc', mt: 1, maxWidth: 600, mx: 'auto' }}>
          Outside of academics, I enjoy <strong>gaming</strong>, <strong>content creation</strong>, and <strong>vlogging</strong> —
          hobbies that fuel my creativity and keep me connected with digital media.
        </Typography>
      </Container>
    </Box>
  );
};

const Interests = () => {
  return (
    <Box sx={{ background: 'linear-gradient(120deg, #1a1a1a 60%, #2c2c2c 100%)', py: 7 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: '#c70039',
            fontWeight: 'bold',
            mb: 4,
            letterSpacing: 2,
            textShadow: '0 2px 8px rgba(199,0,57,0.15)',
          }}
        >
          Interests & Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {interests.map((interest, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
                  border: '2px solid #c70039',
                  borderRadius: 4,
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 8px 32px 0 rgba(199,0,57,0.15)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 16px 32px rgba(199,0,57,0.25)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    {interest.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: '#ffffff', fontWeight: 'bold', mt: 2, letterSpacing: 1 }}
                  >
                    {interest.title}
                  </Typography>
                  <Divider sx={{ my: 1, bgcolor: '#c70039', borderRadius: 2 }} />
                  <Box sx={{ mt: 1, color: 'lightgray' }}>
                    {interest.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={`⚡ ${skill}`}
                        size="small"
                        sx={{
                          bgcolor: '#232526',
                          color: '#fff',
                          fontWeight: 'bold',
                          mr: 0.5,
                          mb: 0.5,
                          border: '1px solid #c70039',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const About = () => {
  return (
    <Box sx={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    }}>
      <Data />
      <Interests />
    </Box>
  );
};

export default About;
