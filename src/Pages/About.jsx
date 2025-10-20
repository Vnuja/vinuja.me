import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaCode, FaMobileAlt, FaPencilRuler, FaObjectGroup } from "react-icons/fa";

/* ------- data ------- */
const useInterests = () =>
  useMemo(
    () => [
      {
        icon: <FaCode />,
        color: "#ff9800",
        title: "Web Development",
        skills: ["Frontend Design", "Backend Engineering", "Full-Stack"],
      },
      {
        icon: <FaMobileAlt />,
        color: "#2196f3",
        title: "App Development",
        skills: ["Cross-Platform Apps", "Backend Integration", "Performance Tuning"],
      },
      {
        icon: <FaObjectGroup />,
        color: "#4caf50",
        title: "UI/UX Design",
        skills: ["Wireframing", "Prototyping", "User Research"],
      },
      {
        icon: <FaPencilRuler />,
        color: "#ffc107",
        title: "Graphic Designing",
        skills: ["Logo Design", "Branding", "Illustrations"],
      },
    ],
    []
  );

/* ------- shared section header ------- */
function SectionHeader({ label, sub, center = false }) {
  return (
    <Stack alignItems={center ? "center" : "flex-start"} sx={{ textAlign: center ? "center" : "left" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          color: "#c70039",
          mb: 0.75,
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
        }}
      >
        {label}
      </Typography>
      <Divider sx={{ width: 64, height: 3, bgcolor: "#c70039", borderRadius: 2, mb: 1.5 }} />
      {sub ? (
        <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 720, fontSize: { xs: "0.98rem", md: "1.05rem" } }}>
          {sub}
        </Typography>
      ) : null}
    </Stack>
  );
}

/* ------- interest card ------- */
function InterestCard({ item }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #232526 0%, #3a3d40 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.18)" },
      }}
    >
      <CardContent>
        <Stack alignItems="center" spacing={1}>
          <Box
            aria-hidden
            sx={{
              display: "grid",
              placeItems: "center",
              width: 56,
              height: 56,
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)",
              color: item.color,
              fontSize: 28,
            }}
          >
            {item.icon}
          </Box>

          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mt: 1 }}>
            {item.title}
          </Typography>
          <Divider sx={{ width: 32, my: 1, bgcolor: "#c70039", borderRadius: 2 }} />

          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={0.75} useFlexGap sx={{ mt: 0.5 }}>
            {item.skills.map((s, i) => (
              <Chip
                key={i}
                label={s}
                size="small"
                sx={{
                  bgcolor: "#2b2e31",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* =================== DESKTOP =================== */
function DesktopAbout() {
  const interests = useInterests();

  return (
    <Box sx={{ background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* About Me */}
        <SectionHeader
          label="About Me"
          sub={
            <>
              I’m an ambitious undergraduate at <strong>SLIIT</strong> with a passion for building clean, performant
              software. I also have hands-on experience in <strong>Videography</strong> and <strong>Graphic Design</strong>.
            </>
          }
        />

        <Stack spacing={1.5} sx={{ mt: 3, color: "#ccc", maxWidth: 900 }}>
          <Divider sx={{ bgcolor: "#c70039", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Achievements" sx={{ bgcolor: "#c70039", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "1.05rem" }}>
            ✅ Built smart systems for homes, vehicles, and computers — integrating technology into everyday life.
          </Typography>
        </Stack>

        {/* Interests & Skills */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={1.5} sx={{ mt: 6, color: "#ccc", maxWidth: 900 }}>
          <Divider sx={{ bgcolor: "#c70039", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Personal Interests" sx={{ bgcolor: "#c70039", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "1.05rem" }}>
            Outside academics I enjoy <strong>gaming</strong>, <strong>content creation</strong>, and <strong>vlogging</strong> —
            hobbies that fuel creativity and keep me close to digital media.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

/* =================== MOBILE =================== */
function MobileAbout() {
  const interests = useInterests();

  return (
    <Box sx={{ background: "linear-gradient(180deg,#121212 0%,#191919 100%)", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* About Me */}
        <SectionHeader
          label="About Me"
          sub={
            <>
              I’m an ambitious undergraduate at <strong>SLIIT</strong> with a passion for building clean, performant
              software. I also have hands-on experience in <strong>Videography</strong> and <strong>Graphic Design</strong>.
            </>
          }
        />

        <Stack spacing={1.25} sx={{ mt: 2.5, color: "#ccc" }}>
          <Divider sx={{ bgcolor: "#c70039", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Achievements" sx={{ bgcolor: "#c70039", color: "#fff", fontWeight: 700, alignSelf: "flex-start" }} />
          <Typography sx={{ fontSize: "1.02rem" }}>
            ✅ Built smart systems for homes, vehicles, and computers — integrating technology into everyday life.
          </Typography>
        </Stack>

        {/* Interests grid (2 per row on phones) */}
        <Box sx={{ mt: 5 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={6}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={1.25} sx={{ mt: 5, color: "#ccc" }}>
          <Divider sx={{ bgcolor: "#c70039", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Personal Interests" sx={{ bgcolor: "#c70039", color: "#fff", fontWeight: 700, alignSelf: "flex-start" }} />
          <Typography sx={{ fontSize: "1.02rem" }}>
            Outside academics I enjoy <strong>gaming</strong>, <strong>content creation</strong>, and <strong>vlogging</strong>.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

/* ------- main export: split renders ------- */
export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}
