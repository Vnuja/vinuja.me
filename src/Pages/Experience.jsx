import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

/* ---------- data ---------- */
const ExperienceData = [
  {
    image: "https://cdn.cse.lk/images/cse-logo/cse-logo.png",
    title: "IT Operations Support Intern",
    company: "CDS - Colombo Stock Exchange, Rajagiriya",
    duration: "2025 September",
  },
  {
    image: "https://iplay.lk/wp-content/themes/IPLAY.LK/assets/theme-images/main-logo.png",
    title: "Social Media Marketing Intern",
    company: "iPLAY.LK, Remote",
    duration: "2022",
  },
  {
    title: "IT Assistant",
    company: "New City Food Corner, Colombo 10",
    duration: "2018 - Present",
  },
  {
    image: "https://preview.redd.it/kwapabdycdx81.jpg?width=720&format=pjpg&auto=webp&s=a3f804eae30ec1ba1b75820970eeb1e858b403d5",
    title: "Social Media Designer",
    company: "MSI Sri Lanka, Remote",
    duration: "2022",
  },
];

/* ---------- helpers ---------- */
function roleBadge(title = "") {
  const t = (title || "").toLowerCase();
  if (t.includes("intern")) return { label: "Internship", color: "rgba(0,0,0,0.6)" };
  if (t.includes("assistant")) return { label: "Assistant", color: "rgba(0,0,0,0.6)" };
  if (t.includes("designer")) return { label: "Design", color: "rgba(0,0,0,0.6)" };
  if (t.includes("engineer") || t.includes("developer")) return { label: "Engineering", color: "rgba(0,0,0,0.6)" };
  return { label: "Experience", color: "rgba(0,0,0,0.6)" };
}

function initials(from = "") {
  const parts = from.split(/[,\-]/)[0]?.trim().split(" ").filter(Boolean) || [];
  const chars = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
  return chars.toUpperCase() || "XP";
}

/* ---------- shared UI ---------- */
function SectionHeader({ title }) {
  return (
    <Stack alignItems="center" sx={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          color: "#c70039",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: 70, height: 3, bgcolor: "#c70039", borderRadius: 2, mt: 1, mb: 3 }} />
    </Stack>
  );
}

function ExperienceCard({ item }) {
  const badge = roleBadge(item.title);

  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #232526 0%, #3a3d40 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.25)" },
      }}
    >
      <Box sx={{ position: "relative", height: 160, bgcolor: "rgba(255,255,255,0.03)" }}>
        {item.image ? (
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            loading="lazy"
            sx={{ height: "100%", objectFit: "contain", p: 2, filter: "saturate(0.95) contrast(1.05)" }}
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "grid",
              placeItems: "center",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: 1,
            }}
            aria-label="No image available"
            role="img"
          >
            {initials(item.company || item.title)}
          </Box>
        )}

        <Chip
          label={badge.label}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: badge.color,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(4px)",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.25 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 0.5 }}>
          {item.company}
        </Typography>
        {item.duration && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mt: 0.75 }}>
            📅 {item.duration}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- Desktop render ---------- */
function DesktopExperience() {
  return (
    <Box
      sx={{
        background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)",
        minHeight: "100vh",
        py: 8,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Experience" />
        <Grid container spacing={3}>
          {ExperienceData.map((exp, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ExperienceCard item={exp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- Mobile render ---------- */
function MobileExperience() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#121212 0%,#191919 100%)",
        minHeight: "100vh",
        py: 6,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <SectionHeader title="Experience" />
        <Grid container spacing={2.5}>
          {ExperienceData.map((exp, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <ExperienceCard item={exp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- main export: split renders ---------- */
export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
