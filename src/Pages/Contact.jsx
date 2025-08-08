import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { GitHub, LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import Navbar from "../Components/Navbar";
import vinuja1 from '../Images/vinuja.jpg';
import { useTheme } from '@mui/material/styles';



const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Handle form submission logic (API call, email sending, etc.)
  };
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1e1e1e 0%, #232526 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 2, md: 6 },
        }}
      >
        <Card
          elevation={8}
          sx={{
            background: "rgba(30,30,30,0.95)",
            p: { xs: 2, md: 4 },
            borderRadius: 4,
            maxWidth: 500,
            width: "100%",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
            backdropFilter: "blur(6px)",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
              
              <Typography variant="h4" sx={{ color: "#ff4081", fontWeight: 700, textAlign: "center" }}>
                Contact Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgb(220,220,220)",
                  textAlign: "center",
                  mt: 1,
                  mb: 2,
                  fontSize: "1.1rem",
                }}
              >
                Feel free to reach out for collaborations or just a friendly chat!
              </Typography>
            </Box>

            <Divider sx={{ mb: 3, background: "#ff4081" }} />

            {/* Contact Form */}
                  <Box
                  sx={{
                  mt: 4,
                  display: "flex",
                  gap: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                >
                  <Tooltip title="GitHub" arrow>
                  <IconButton
                    component="a"
                    href="https://github.com/Vnuja"
                    target="_blank"
                    sx={{
                    color: "#fff",
                    background: "#232323",
                    "&:hover": { background: "#9900ffff", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #9900ffff",
                    }}
                    size="large"
                  >
                    <GitHub fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/vinuja"
                    target="_blank"
                    sx={{
                    color: "#0066ffff",
                    background: "#232323",
                    "&:hover": { background: "#ffffffff", color: "#0066ffff" },
                    boxShadow: "0 2px 8px 0 #0066ffff",
                    }}
                    size="large"
                  >
                    <LinkedIn fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="Email" arrow>
                  <IconButton
                    component="a"
                    href="mailto:vinujaransith039@gmail.com"
                    sx={{
                    color: "#ff0000ff",
                    background: "#232323",
                    "&:hover": { background: "#ff0000ff", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #ff0000ff",
                    }}
                    size="large"
                  >
                    <Email fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="WhatsApp" arrow>
                  <IconButton
                    component="a"
                    href="https://wa.me/94769451554"
                    target="_blank"
                    sx={{
                    color: "#25D366",
                    background: "#232323",
                    "&:hover": { background: "#25D366", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #25D366",
                    }}
                    size="large"
                  >
                    <WhatsApp fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                </Box>
                  </CardContent>
                </Card>

                {/* Social Media Links */}
        
      </Container>
    </Box>
  );
};

export default Contact;
