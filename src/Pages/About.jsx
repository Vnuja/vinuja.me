import React from 'react';
import vinuja1 from '../Images/vinuja.jpg';
import { FaCode, FaMobileAlt, FaPencilRuler, FaObjectGroup } from "react-icons/fa";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from "@mui/material";

function Data() {
  return (
    <div style={{ background: 'linear-gradient(to right,  #1a1a1a, #333333)' }}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          padding: '40px',
          color: '#ffffff',
          borderRadius: '10px',
        }}
      >
        <Avatar
          src={vinuja1}
          alt="Vinuja"
          sx={{
            width: 200,
            height: 200,
            margin: '20px auto',
            border: '3px solid #c70039',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.1)' },
          }}
        />
        <Typography variant="h3" sx={{ color: '#c70039', fontWeight: 'bold' }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2em', marginTop: '20px', color: '#cccccc' }}>
          As an ambitious undergraduate student at <strong>SLIIT University</strong>, I am passionate about technology and digital innovation.
          My academic journey is complemented by hands-on experience in <strong>marketing</strong> and <strong>social media design</strong>,
          where I have honed my skills in a professional setting.
        </Typography>

        <Typography variant="h4" sx={{ color: '#c70039', marginTop: '30px', fontWeight: 'bold' }}>
          Achievements
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', color: '#cccccc' }}>
          ✅ Developed fully functional smart systems for homes, vehicles, and computers, integrating technology into everyday applications.
        </Typography>

        <Typography variant="h4" sx={{ color: '#c70039', marginTop: '30px', fontWeight: 'bold' }}>
          Personal Interests
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2em', color: '#cccccc' }}>
          Outside of academics, I am an avid <strong>gamer</strong>, <strong>content creator</strong>, and <strong>vlogger</strong>.
          These hobbies fuel my creativity and keep me connected with the latest trends in digital media and technology.
        </Typography>
      </Container>
      </div>
  );
}

const interests = [
  {
    icon: <FaCode style={{ fontSize: '3rem', color: 'orange' }} />,
    title: "Web Engineering",
    skills: ["Frontend Design", "Backend Engineering", "Full-Stack"],
  },
  {
    icon: <FaMobileAlt style={{ fontSize: '3rem', color: 'blue' }} />,
    title: "App Development",
    skills: ["Cross-Platform Apps", "Backend Integration", "Performance Tuning"],
  },
  {
    icon: <FaObjectGroup style={{ fontSize: '3rem', color: 'green' }} />,
    title: "UI/UX Design",
    skills: ["Wireframing", "Prototyping", "User Research"],
  },
  {
    icon: <FaPencilRuler style={{ fontSize: '3rem', color: 'yellow' }} />,
    title: "Graphic Designing",
    skills: ["Logo Design", "Branding", "Illustrations"],
  },
];

const Interests = () => {
  return (
    <div style={{ background: 'linear-gradient(to right,  #1a1a1a, #333333)' }}>
<Container
      maxWidth="lg"
      sx={{
        color: 'white',
        py: 5,
        marginBottom: '20px',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#c70039', fontWeight: 'bold', marginBottom: 4 }}>
        Interests & Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {interests.map((interest, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                textAlign: 'center',
                padding: 3,
                border: '3px solid #c70039',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 0px 15px rgba(255, 76, 76, 0.5)',
                },
              }}
            >
              <CardContent>
                {interest.icon}
                <Typography variant="h5" sx={{ color: 'lightgreen', fontWeight: 'bold', mt: 2 }}>
                  {interest.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'lightgray', mt: 1 }}>
                  {interest.skills.map((skill, i) => (
                    <div key={i}>⚡ {skill}</div>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#0d0d0d', minHeight: '100vh', py: 5 }}>
      <Data />
      <Interests />
    </Box>
  );
};

export default About;
