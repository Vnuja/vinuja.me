import React, { useMemo, useState } from "react";
import { useProjects } from "../admin/useProjects";
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
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



const categories = ["All", "Web", "Mobile", "UI/UX", "Graphic Design"];

/* ---------------- reusable bits ---------------- */
function SectionHeader({ title }) {
  return (
    <Stack alignItems="center" sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: 0.5, color: "#c70039", fontSize: { xs: "1.9rem", md: "2.4rem" } }}>
        {title}
      </Typography>
      <Box sx={{ width: 70, height: 3, bgcolor: "#c70039", borderRadius: 2, mt: 1, mb: 3 }} />
    </Stack>
  );
}

function CategoryFilter({ value, onChange, dense = false }) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, v) => v && onChange(v)}
      sx={{ flexWrap: "wrap", gap: 1, justifyContent: "center" }}
    >
      {categories.map((c) => (
        <ToggleButton
          key={c}
          value={c}
          sx={{
            textTransform: "none",
            borderRadius: 5,
            px: dense ? 1.5 : 2.5,
            py: dense ? 0.5 : 0.75,
            borderColor: "#c70039",
            color: value === c ? "#fff" : "#c70039",
            bgcolor: value === c ? "linear-gradient(90deg,#c70039,#ff4081)" : "transparent",
            "&.Mui-selected": {
              bgcolor: "linear-gradient(90deg,#c70039,#ff4081)",
              color: "#fff",
              borderColor: "transparent",
            },
            "&:hover": { opacity: 0.95 },
          }}
        >
          {c}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

function badgeFromType(type = "") {
  const t = type.toLowerCase();
  if (t.includes("mern")) return "MERN";
  if (t.includes("react")) return "React";
  if (t.includes("three")) return "Three.js";
  if (t.includes("kotlin")) return "Kotlin";
  if (t.includes("ui/ux")) return "UI/UX";
  if (t.includes("graphic")) return "Design";
  return "Project";
}

function ProjectCard({ project, onOpen }) {
  const img = project.images ? project.images[0] : project.image;
  const badge = badgeFromType(project.type);

  return (
    <Card
      onClick={onOpen}
      sx={{
        height: "100%",
        cursor: "pointer",
        background: "linear-gradient(135deg,#232526 0%,#3a3d40 100%)",
        color: "#fff",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.25)" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={img}
          alt={project.title}
          loading="lazy"
          sx={{ height: 190, objectFit: "cover", filter: "brightness(.98) contrast(1.05)" }}
        />
        <Chip
          label={badge}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(4px)",
          }}
        />
      </Box>

      <CardContent sx={{ p: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#ff7ca0" }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5, minHeight: 40 }}>
          {project.description?.length > 90 ? `${project.description.slice(0, 90)}…` : project.description || project.type}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProjectDialog({ project, open, onClose }) {
  const [index, setIndex] = useState(0);
  const isCarousel = Array.isArray(project?.images) && project.images.length > 0;
  const current = isCarousel ? project.images[index] : project?.image;

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={onClose}
      aria-labelledby="project-title"
      PaperProps={{
        sx: {
          background: "linear-gradient(135deg,#232526 0%,#414345 100%)",
          color: "#fff",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.2)",
        },
      }}
    >
      <DialogTitle id="project-title" sx={{ pr: 6, color: "#ff7ca0", fontWeight: 800 }}>
        {project?.title}
        <IconButton
          aria-label="Close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ borderColor: "rgba(255,255,255,0.1)" }}>
        {/* media */}
        <Box sx={{ position: "relative", mb: 2 }}>
          <Box
            component="img"
            src={current}
            alt={project?.title}
            sx={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0 2px 16px rgba(199,0,57,0.35)",
            }}
          />
          {isCarousel && (
            <>
              <IconButton
                aria-label="Previous"
                onClick={() => setIndex((p) => (p === 0 ? project.images.length - 1 : p - 1))}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Next"
                onClick={() => setIndex((p) => (p === project.images.length - 1 ? 0 : p + 1))}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>

              {/* dots */}
              <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
                {project.images.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setIndex(i)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      mx: 0.5,
                      cursor: "pointer",
                      bgcolor: i === index ? "#c70039" : "#fff",
                      opacity: i === index ? 1 : 0.5,
                      border: "1px solid #c70039",
                    }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Box>

        {/* text */}
        <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>{project?.description}</Typography>
        <Typography sx={{ mt: 1.5, color: "rgba(255,255,255,0.75)" }}>
          Type: <b style={{ color: "#c70039" }}>{project?.type}</b>
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => window.open(project?.link, "_blank")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              bgcolor: "linear-gradient(90deg,#c70039,#ff4081)",
              color: "#fff",
              fontWeight: 700,
              boxShadow: "0 2px 8px rgba(199,0,57,0.45)",
              "&:hover": { opacity: 0.95 },
            }}
          >
            {project?.category === "Graphic Design" ? "View Designs" : "View Project"}
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              borderColor: "#c70039",
              color: "#c70039",
              fontWeight: 700,
            }}
          >
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- desktop view ---------------- */
function DesktopProjects({ filtered, onSelect, selectedCategory, setSelectedCategory }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="My Projects" />
        <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {filtered.map((p, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <ProjectCard project={p} onOpen={() => onSelect(p)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------------- mobile view ---------------- */
function MobileProjects({ filtered, onSelect, selectedCategory, setSelectedCategory }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        background: "linear-gradient(180deg,#121212 0%,#191919 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <SectionHeader title="My Projects" />
        <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} dense />

        <Grid container spacing={2.5} sx={{ mt: 1 }}>
          {filtered.map((p, i) => (
            <Grid key={i} item xs={12} sm={6}>
              <ProjectCard project={p} onOpen={() => onSelect(p)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------------- main export: split renders ---------------- */
export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { projects: projectData } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(
    () => (selectedCategory === "All" ? projectData : projectData.filter((p) => p.category === selectedCategory)),
    [selectedCategory]
  );

  return (
    <>
      {isMobile ? (
        <MobileProjects
          filtered={filtered}
          onSelect={setSelectedProject}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <DesktopProjects
          filtered={filtered}
          onSelect={setSelectedProject}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {/* dialog (shared) */}
      <ProjectDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
