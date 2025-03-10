import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import Navbar from "../Components/Navbar";

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

  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 4 }}>
        <Card sx={{ backgroundColor: "#1e1e1e", padding: 4, borderRadius: 3, maxWidth: 500, width: "100%" }}>
          <CardContent>
            <Typography variant="h4" sx={{ color: " #ff4081", textAlign: "center", mb: 2 }}>
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ color: "rgb(255, 255, 255)",textAlign: "center", mb: 3 }}>
              Feel free to reach out for collaborations or just a friendly chat!
            </Typography>

            {/* Contact Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "#292929", borderRadius: 1, input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "#292929", borderRadius: 1, input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "#292929", borderRadius: 1, input: { color: "white" }, label: { color: "white" } }}
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#c70039",
                  color: "white",
                  fontSize: "1.2rem",
                  padding: 1.5,
                  "&:hover": { backgroundColor: "#ff003c" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Box sx={{ marginTop: 3, display: "flex", gap: 3 }}>
          <Typography component="a" href="https://github.com/Vnuja" target="_blank" sx={{ color: "white", fontSize: "1.5rem", textDecoration: "none" }}>
            🔗 GitHub
          </Typography>
          <Typography component="a" href="https://linkedin.com/in/vinuja" target="_blank" sx={{ color: "white", fontSize: "1.5rem", textDecoration: "none" }}>
            🔗 LinkedIn
          </Typography>
          <Typography component="a" href="mailto:vinujaransith039@gmail.com" sx={{ color: "white", fontSize: "1.5rem", textDecoration: "none" }}>
            📩 Email
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
