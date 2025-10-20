import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MLink,
  IconButton,
  Button,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import NorthIcon from "@mui/icons-material/North";

const year = new Date().getFullYear();

const social = [
  { icon: <GitHubIcon />, href: "https://github.com/vinujaransith", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/vinujaransith", label: "LinkedIn" },
  { icon: <EmailIcon />, href: "mailto:vinujaransith039@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "https://wa.me/94769451554" },
];

function SocialRow({ size = "medium" }) {
  return (
    <Stack direction="row" spacing={1.5}>
      {social.map((s, i) => (
        <IconButton
          key={i}
          aria-label={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform .2s, color .2s",
            "&:hover": { transform: "translateY(-3px)", color: "primary.light" },
          }}
          size={size}
        >
          {s.icon}
        </IconButton>
      ))}
    </Stack>
  );
}

/* ---------------- Desktop render ---------------- */
function DesktopFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 6,
        pb: 2,
        background:
          "radial-gradient(1200px 600px at 90% -10%, rgba(199,0,57,0.08), transparent 60%), linear-gradient(180deg, rgba(16,16,16,0.98) 0%, rgba(10,10,10,1) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand + tagline */}
          <Grid item md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, letterSpacing: 0.3 }}
              >
                Vinuja<span style={{ color: "#c70039" }}>.</span>me
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                Software designer & web engineer crafting clean, performant
                experiences with React, Node and a sprinkle of good taste.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Open to Freelance" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
                <Chip label="Colombo, Sri Lanka" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
              </Stack>
              <SocialRow />
            </Stack>
          </Grid>

          {/* Quick links */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Quick Links
            </Typography>
            <Grid container spacing={1} columns={12}>
              {quickLinks.map((q) => (
                <Grid item xs={6} key={q.label}>
                  <MLink
                    href={q.href}
                    underline="hover"
                    color="inherit"
                    sx={{
                      display: "inline-block",
                      py: 0.5,
                      color: "rgba(255,255,255,0.8)",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {q.label}
                  </MLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <MLink href="mailto:vinujaransith039@gmail.com" color="inherit" underline="hover">
                vinujaransith039@gmail.com
              </MLink>
              <MLink href="https://wa.me/94769451554" target="_blank" rel="noopener" color="inherit" underline="hover">
                WhatsApp: +94 76 945 1554
              </MLink>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                Available: Mon–Fri · 9:00–18:00 (GMT+5:30)
              </Typography>
              <Button
                href="https://wa.me/94769451554"
                sx={{
                  mt: 1,
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  fontWeight: 700,
                  bgcolor: "#c70039",
                  color: "#fff",
                  alignSelf: "start",
                  "&:hover": { opacity: 0.95 },
                }}
              >
                Start a Project
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bottom strip */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pb: 1 }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © {year} Vinuja.me — Built with React & MUI · Deployed on your favorite host
          </Typography>

          <IconButton
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 2,
              p: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
            }}
          >
            <NorthIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Mobile render ---------------- */
function MobileFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 4,
        pb: 2,
        px: 2,
        background:
          "linear-gradient(180deg, rgba(16,16,16,0.98) 0%, rgba(10,10,10,1) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          {/* Brand */}
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Vinuja<span style={{ color: "#c70039" }}>.</span>me
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              Web Developer & Graphic Designer.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Open to Freelance" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
              <Chip label="Colombo" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
            </Stack>
          </Stack>

          {/* Links */}
          <Grid container spacing={1}>
            {quickLinks.map((q) => (
              <Grid item xs={6} key={q.label}>
                <MLink
                  href={q.href}
                  underline="hover"
                  color="inherit"
                  sx={{
                    display: "inline-block",
                    py: 0.5,
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {q.label}
                </MLink>
              </Grid>
            ))}
          </Grid>

          {/* Contact + Social */}
          <Stack spacing={1}>
            <MLink href="mailto:vinujaransith039@gmail.com" color="inherit" underline="hover">
              vinujaransith039@gmail.com
            </MLink>
            <MLink href="https://wa.me/94769451554" target="_blank" rel="noopener" color="inherit" underline="hover">
              WhatsApp: +94 76 945 1554
            </MLink>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Mon–Fri · 9:00–18:00 (GMT+5:30)
            </Typography>
            <SocialRow size="small" />
          </Stack>

          <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Bottom strip */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
              © {year} Vinuja.me — Crafted Using React & MUI By Me!
            </Typography>
            <IconButton
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 2,
                p: 0.5,
                "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
              }}
              size="small"
            >
              <NorthIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Main export: two renders ---------------- */
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // split at <600px
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}
