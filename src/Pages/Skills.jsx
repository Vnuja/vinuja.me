import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Divider, Box, Chip, TextField, InputAdornment } from "@mui/material";
import { Code, Build, Storage, Web, Settings, Work, Apps, Layers, Search as SearchIcon } from "@mui/icons-material";

const skillCategories = {
  "Soft Skills": ["Communication", "Project Management", "Problem Solving", "Teamwork", "Time Management", "Leadership", "Critical Thinking", "Adaptability", "Creativity", "Decision Making"],
  "Programming Languages": ["PHP", "JavaScript", "TypeScript", "Python", "Java", "C++", "Kotlin"],
  "Databases": ["MySQL", "MongoDB"],
  "Frontend Development": ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js", "Material-UI", "Three.js"],
  "Backend Development": ["Node.js", "Express.js"],
  "Tools & Frameworks": ["Vite", "Figma", "Digital Marketing", "Web Applications"],
  "Office & Productivity": ["Microsoft Excel", "Google Sheets", "Google Docs", "Google Slides", "Microsoft Word", "Microsoft PowerPoint"],
  "Applications": [ "ClickUp", "Zoom", "Microsoft Teams"],
  "Frameworks": ["React.js", "TypeScript", "Express.js", "Node.js", "Material-UI", "Bootstrap", "Tailwind CSS"]
};

const categoryIcons = {
  "Soft Skills": <Work sx={{ color: "#c70039" }} />,
  "Programming Languages": <Code sx={{ color: "#c70039" }} />,
  "Databases": <Storage sx={{ color: "#c70039" }} />,
  "Frontend Development": <Web sx={{ color: "#c70039" }} />,
  "Backend Development": <Build sx={{ color: "#c70039" }} />,
  "Tools & Frameworks": <Settings sx={{ color: "#c70039" }} />,
  "Office & Productivity": <Apps sx={{ color: "#c70039" }} />,
  "Applications": <Apps sx={{ color: "#c70039" }} />,
  "Frameworks": <Layers sx={{ color: "#c70039" }} />
};

const Skills = () => {
  const [search, setSearch] = useState("");

  // Filter skills based on search
  const filteredCategories = Object.entries(skillCategories).reduce((acc, [category, skills]) => {
    const filteredSkills = skills.filter(skill =>
      skill.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredSkills.length > 0 || search === "") {
      acc[category] = filteredSkills.length > 0 ? filteredSkills : skills;
    }
    return acc;
  }, {});

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, md: 8 }
      }}
    >
      <Card
        elevation={8}
        sx={{
          background: "rgba(30,30,30,0.95)",
          color: "white",
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          maxWidth: 1100,
          mx: "auto",
          boxShadow: "0 8px 32px 0 rgba(199,0,57,0.2)"
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: 2,
              color: "#c70039",
              mb: 4
            }}
          >
            My Expert Area
          </Typography>
          <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Search skills..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{
                width: { xs: "100%", sm: 400 },
                background: "rgba(255,255,255,0.08)",
                input: { color: "#fff" }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#c70039" }} />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          {Object.entries(filteredCategories).map(([category, skills], index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 1,
                  color: "rgb(250, 202, 216)",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: "1.15rem"
                }}
              >
                {categoryIcons[category]}&nbsp;{category}
              </Typography>
              <Divider sx={{ backgroundColor: "#c70039", mb: 2, height: 2, borderRadius: 1 }} />
              <Grid container spacing={2}>
                {skills.map((skill, skillIndex) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={skillIndex}>
                    <Card
                      elevation={3}
                      sx={{
                        background: "linear-gradient(135deg, #c70039 60%, #1e1e1e 100%)",
                        textAlign: "center",
                        borderRadius: 3,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 24px 0 rgba(199,0,57,0.25)"
                        }
                      }}
                    >
                      <CardContent sx={{ py: 2 }}>
                        <Chip
                          label={skill}
                          sx={{
                            background: "rgba(255,255,255,0.08)",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "1rem",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            letterSpacing: 1
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skills;
