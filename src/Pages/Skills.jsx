import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search as SearchIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  Code,
  Build,
  Storage,
  Web,
  Settings,
  Work,
  Apps,
  Layers,
} from "@mui/icons-material";

/* ---------------- data ---------------- */
const skillCategories = {
  "Soft Skills": [
    "Communication",
    "Project Management",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Critical Thinking",
    "Adaptability",
    "Creativity",
    "Decision Making",
  ],
  "Programming Languages": ["PHP", "JavaScript", "TypeScript", "Python", "Java", "C++", "Kotlin"],
  Databases: ["MySQL", "MongoDB"],
  "Frontend Development": ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js", "Material-UI", "Three.js"],
  "Backend Development": ["Node.js", "Express.js"],
  "Tools & Frameworks": ["Vite", "Figma", "Digital Marketing", "Web Applications"],
  "Office & Productivity": [
    "Microsoft Excel",
    "Google Sheets",
    "Google Docs",
    "Google Slides",
    "Microsoft Word",
    "Microsoft PowerPoint",
  ],
  Applications: ["ClickUp", "Zoom", "Microsoft Teams"],
  Frameworks: ["React.js", "TypeScript", "Express.js", "Node.js", "Material-UI", "Bootstrap", "Tailwind CSS"],
};

const categoryIcons = {
  "Soft Skills": <Work sx={{ color: "#c70039" }} />,
  "Programming Languages": <Code sx={{ color: "#c70039" }} />,
  Databases: <Storage sx={{ color: "#c70039" }} />,
  "Frontend Development": <Web sx={{ color: "#c70039" }} />,
  "Backend Development": <Build sx={{ color: "#c70039" }} />,
  "Tools & Frameworks": <Settings sx={{ color: "#c70039" }} />,
  "Office & Productivity": <Apps sx={{ color: "#c70039" }} />,
  Applications: <Apps sx={{ color: "#c70039" }} />,
  Frameworks: <Layers sx={{ color: "#c70039" }} />,
};

/* ---------------- helpers ---------------- */
function highlight(text, q) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <Box component="span" sx={{ color: "#fff", bgcolor: "rgba(199,0,57,0.35)", px: 0.5, borderRadius: 0.75 }}>
        {text.slice(i, i + q.length)}
      </Box>
      {text.slice(i + q.length)}
    </>
  );
}

function filterCategories(categories, search) {
  const out = {};
  const q = search.trim().toLowerCase();
  Object.entries(categories).forEach(([cat, skills]) => {
    if (!q) {
      out[cat] = skills.slice();
    } else {
      const filtered = skills.filter((s) => s.toLowerCase().includes(q));
      if (filtered.length) out[cat] = filtered;
    }
  });
  return out;
}

function countSkills(categories) {
  return Object.values(categories).reduce((a, arr) => a + arr.length, 0);
}

/* ---------------- shared UI bits ---------------- */
function SectionHeader() {
  return (
    <Stack alignItems="center" sx={{ textAlign: "center", mb: 3 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          color: "#c70039",
          fontSize: { xs: "1.9rem", md: "2.3rem" },
        }}
      >
        My Expert Area
      </Typography>
      <Box sx={{ width: 72, height: 3, bgcolor: "#c70039", borderRadius: 2, mt: 1 }} />
    </Stack>
  );
}

function CategoryTitle({ name }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {categoryIcons[name] || <Layers sx={{ color: "#c70039" }} />}
      <Typography sx={{ fontWeight: 800, color: "rgb(250,202,216)", letterSpacing: 0.2 }}>{name}</Typography>
    </Stack>
  );
}

function SkillPill({ label, search }) {
  return (
    <Chip
      label={<Typography sx={{ fontWeight: 600 }}>{highlight(label, search)}</Typography>}
      sx={{
        bgcolor: "rgba(255,255,255,0.07)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 2,
        px: 1,
        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
      }}
    />
  );
}

function SearchBar({ search, setSearch, total }) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ xs: "stretch", sm: "center" }} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search skills…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          maxWidth: { xs: "100%", sm: 520 },
          background: "rgba(255,255,255,0.08)",
          input: { color: "#fff" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#c70039" }} />
            </InputAdornment>
          ),
          endAdornment: search ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setSearch("")} sx={{ color: "rgba(255,255,255,0.8)" }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
      <Paper
        elevation={0}
        sx={{
          px: 1.5,
          py: 0.75,
          bgcolor: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 2,
          width: "fit-content",
        }}
      >
        <Typography variant="body2">Results: <b>{total}</b></Typography>
      </Paper>
    </Stack>
  );
}

/* ---------------- desktop render ---------------- */
function DesktopSkills({ filtered, search }) {
  const categories = Object.keys(filtered);
  const left = categories.slice(0, Math.ceil(categories.length / 2));
  const right = categories.slice(Math.ceil(categories.length / 2));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background:
          "radial-gradient(1000px 600px at 90% -10%, rgba(199,0,57,0.10), transparent 60%), linear-gradient(120deg, #121212 0%, #1a1a1a 60%, #202020 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={3} alignItems="flex-start">
          {[left, right].map((col, colIdx) => (
            <Grid key={colIdx} item xs={12} md={6}>
              <Stack spacing={3} sx={{ position: "relative" }}>
                {col.map((cat) => (
                  <Card
                    key={cat}
                    elevation={0}
                    sx={{
                      background: "rgba(30,30,30,0.85)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 3,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Stack spacing={1}>
                        <CategoryTitle name={cat} />
                        <Divider sx={{ bgcolor: "#c70039", opacity: 0.8, borderRadius: 1, my: 1 }} />
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                          {filtered[cat].map((s, i) => (
                            <SkillPill key={i} label={s} search={search} />
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------------- mobile render ---------------- */
function MobileSkills({ filtered, search }) {
  const categories = Object.keys(filtered);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        background: "linear-gradient(180deg, #121212 0%, #191919 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <SectionHeader />
        <Stack spacing={1.25}>
          {categories.map((cat, idx) => (
            <Accordion
              key={cat}
              disableGutters
              sx={{
                background: "rgba(30,30,30,0.9)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                "&:before": { display: "none" },
              }}
              defaultExpanded={idx < 2} // expand first two by default
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                <CategoryTitle name={cat} />
              </AccordionSummary>
              <AccordionDetails>
                <Divider sx={{ bgcolor: "#c70039", opacity: 0.8, borderRadius: 1, mb: 1.25 }} />
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {filtered[cat].map((s, i) => (
                    <SkillPill key={i} label={s} search={search} />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- main export: split renders ---------------- */
export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [search, setSearch] = useState("");
  const filtered = useMemo(() => filterCategories(skillCategories, search), [search]);
  const total = useMemo(() => countSkills(filtered), [filtered]);

  return (
    <Box sx={{ px: { xs: 2, md: 4 } }}>
      <Box sx={{ position: "sticky", top: 64, zIndex: 2, py: 2, background: "transparent" }}>
        <Container maxWidth="lg">
          <SearchBar search={search} setSearch={setSearch} total={total} />
        </Container>
      </Box>

      {isMobile ? <MobileSkills filtered={filtered} search={search} /> : <DesktopSkills filtered={filtered} search={search} />}
    </Box>
  );
}
