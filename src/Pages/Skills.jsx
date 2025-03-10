import React from "react";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import { Code, Build, Storage, Web, Settings, Work, Apps, Layers } from "@mui/icons-material";

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
  "Soft Skills": <Work />,
  "Programming Languages": <Code />,
  "Databases": <Storage />,
  "Frontend Development": <Web />,
  "Backend Development": <Build />,
  "Tools & Frameworks": <Settings />,
  "Office & Productivity": <Apps />,
  "Applications": <Apps />,
  "Frameworks": <Layers />
};

const Skills = () => {
  return (
    <Card sx={{ marginTop: 4, backgroundColor: "#1e1e1e", color: "white", p: 3, borderRadius: 3, maxWidth: "auto", mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          My Expert Area
        </Typography>
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "rgb(250, 202, 216)", display: "flex", alignItems: "center" }}>
              {categoryIcons[category]}&nbsp;{category}
            </Typography>
            <Divider sx={{ backgroundColor: " #c70039", mb: 2 }} />
            <Grid container spacing={2}>
              {skills.map((skill, skillIndex) => (
                <Grid item xs={6} sm={3} key={skillIndex}>
                  <Card sx={{ backgroundColor: " #c70039", textAlign: "center", p: 1, borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="body1" sx={{ color: "rgb(255, 255, 255)" }}>{skill}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
